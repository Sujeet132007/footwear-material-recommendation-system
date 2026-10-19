from flask import Flask, render_template, request, jsonify
from model import recommend_top3_materials

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("final_page.html")

@app.route("/recommend", methods=["POST"])
def recommend():
    data = request.get_json()

    requirements = data["requirements"]
    recommendations = recommend_top3_materials(requirements)
    
    return jsonify({
        "status": "success",
        "recommendations": recommendations
    })

if __name__=="__main__":
    app.run(debug=True)


