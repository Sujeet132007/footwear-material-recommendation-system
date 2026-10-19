import numpy as np
import pandas as pd
import os
import joblib

from sklearn.preprocessing import OrdinalEncoder
from sklearn.neighbors import NearestNeighbors

BASE_DIR=os.path.dirname(os.path.abspath(__file__))
csv_path=os.path.join(BASE_DIR,"footwear_materials.csv")
df=pd.read_csv(csv_path)

feature_cols = [
    "Grip",
    "Comfort",
    "Water_Resistance",
    "Early_Drying",
    "Lightweight",
    "Durability"
]

# Order of levels
level_order = ["Low", "Medium", "High", "Very High"]

categories = [level_order] * len(feature_cols)

# Encoder
encoder = OrdinalEncoder(categories=categories)

X_encoded = encoder.fit_transform(df[feature_cols])

# Encoded dataframe
df_encoded = pd.DataFrame(
    X_encoded,
    columns=feature_cols
)

df_encoded["Material_Name"] = df["Material_Name"]
df_encoded["Component"] = df["Component"]


# ==============================
# RECOMMENDATION FUNCTION
# ==============================

def recommend_top3_materials(user_requirements):

    # User input → DataFrame
    input_df = pd.DataFrame([user_requirements])

    # Encode user requirements
    user_vector = encoder.transform(
        input_df[feature_cols]
    )

    recommendations = {}

    # All components
    components = df["Component"].unique()

    # KNN for each component
    for comp in components:

        comp_df = df_encoded[
            df_encoded["Component"] == comp
        ].reset_index(drop=True)

        X_comp = comp_df[feature_cols].values

        # KNN
        knn = NearestNeighbors(
            n_neighbors=min(3, len(comp_df)),
            metric="euclidean"
        )

        knn.fit(X_comp)

        # Find nearest materials
        distances, indices = knn.kneighbors(user_vector)

        # Top 3 materials
        top3 = comp_df.iloc[
            indices[0]
        ]["Material_Name"].tolist()

        recommendations[comp] = top3

    return recommendations