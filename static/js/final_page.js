
const categories = {

    Army: [
        "Army",
        "Navy",
        "Air Force",
        "NSG"
    ],

    Athletic: [
       /* "Running",*/
        "Football",
        "Cricket",
        "Basketball",
        "Gym Training"
    ],

    Farming: [
        "General Farming",
        "Wet Farming",
        "Dry Field Work",
        /*"Mud / Field Work"*/
    ],

    Construction: [
        "General Construction",
        "Road Work",
        "Heavy Machinery",
        "Industrial Work"
    ],

    Medical: [
        "Diabetic-Friendly",
        "Long-Standing Comfort",
        /*"Walking Support",
        "Recovery / Comfort"*/
    ],

    Office: [
        "Formal Office",
        "Long Standing",
       /* "Daily Walking",*/
        "Business Casual"
    ],

    Tracking: [
        "Hiking",
        "Forest Trek",
        "Mountain Trek",
        /*"Long Distance",*/
        "Rocky Terrain"
    ],

    Jogging: [
        "Road Jogging",
        /*"Trail Jogging",*/
        "Treadmill Jogging",
       /* "Long-Distance Jogging"*/
    ]

};


/* =========================================================
   2. CATEGORY ICONS
========================================================= */

const categoryIcons = {

    Army: "🛡",

    Athletic: "⚡",

    Farming: "🌱",

    Construction: "🏗",

    Medical: "✚",

    Office: "💼",

    Tracking: "⛰",

    Jogging: "🏃"

};


/* =========================================================
   3. CATEGORY DESCRIPTIONS
========================================================= */

const categoryDescriptions = {

    Army:
        "Professional footwear designed for military operations and demanding environments.",

    Athletic:
        "Performance footwear designed for sports, training and active movement.",

    Farming:
        "Footwear designed for agricultural work, fields, mud and changing outdoor conditions.",

    Construction:
        "Protective footwear designed for construction sites, industrial work and heavy environments.",

    Medical:
        "Comfort-focused footwear designed for healthcare, walking support and long periods of use.",

    Office:
        "Comfortable and professional footwear designed for office environments and daily work.",

    Tracking:
        "Rugged footwear designed for hiking, trekking, changing weather and challenging terrain.",

    Jogging:
        "Lightweight performance footwear designed for regular jogging and running activities."

};


/* =========================================================
   4. SUBCATEGORY REQUIREMENTS
========================================================= */

/*
    Values:

    Low
    Medium
    High
    Very High
*/

const requirements = {


    /* =========================
       ARMY
    ========================= */

    "Army": {
        Grip: "Very High",
        Comfort: "High",
        Water_Resistance: "High",
        Early_Drying: "High",
        Lightweight: "Medium",
        Durability: "Very High"
    },

    "Navy": {
        Grip: "Very High",
        Comfort: "High",
        Water_Resistance: "Very High",
        Early_Drying: "Very High",
        Lightweight: "Medium",
        Durability: "High"
    },

    "Air Force": {
        Grip: "High",
        Comfort: "Very High",
        Water_Resistance: "Medium",
        Early_Drying: "High",
        Lightweight: "Very High",
        Durability: "High"
    },

    "NSG": {
        Grip: "Very High",
        Comfort: "High",
        Water_Resistance: "High",
        Early_Drying: "High",
        Lightweight: "Very High",
        Durability: "Very High"
    },


    /* =========================
       ATHLETIC
    ========================= */

    /*"Running": {
        Grip: "High",
        Comfort: "Very High",
        Water_Resistance: "Medium",
        Early_Drying: "High",
        Lightweight: "Very High",
        Durability: "High"
    },*/

    "Football": {
        Grip: "Very High",
        Comfort: "High",
        Water_Resistance: "Medium",
        Early_Drying: "High",
        Lightweight: "High",
        Durability: "Very High"
    },

    "Cricket": {
        Grip: "High",
        Comfort: "High",
        Water_Resistance: "Medium",
        Early_Drying: "Medium",
        Lightweight: "High",
        Durability: "Very High"
    },

    "Basketball": {
        Grip: "Very High",
        Comfort: "Very High",
        Water_Resistance: "Low",
        Early_Drying: "Medium",
        Lightweight: "High",
        Durability: "High"
    },

    "Gym Training": {
        Grip: "High",
        Comfort: "Very High",
        Water_Resistance: "Low",
        Early_Drying: "High",
        Lightweight: "Very High",
        Durability: "High"
    },


    /* =========================
       FARMING
    ========================= */

    "General Farming": {
        Grip: "Very High",
        Comfort: "High",
        Water_Resistance: "High",
        Early_Drying: "High",
        Lightweight: "Medium",
        Durability: "Very High"
    },

    "Wet Farming": {
        Grip: "Very High",
        Comfort: "High",
        Water_Resistance: "Very High",
        Early_Drying: "Very High",
        Lightweight: "Medium",
        Durability: "Very High"
    },

    "Dry Field Work": {
        Grip: "High",
        Comfort: "High",
        Water_Resistance: "Medium",
        Early_Drying: "High",
        Lightweight: "High",
        Durability: "Very High"
    },

   /* "Mud / Field Work": {
        Grip: "Very High",
        Comfort: "High",
        Water_Resistance: "Very High",
        Early_Drying: "High",
        Lightweight: "Medium",
        Durability: "Very High"
    },*/


    /* =========================
       CONSTRUCTION
    ========================= */

    "General Construction": {
        Grip: "Very High",
        Comfort: "High",
        Water_Resistance: "High",
        Early_Drying: "High",
        Lightweight: "Medium",
        Durability: "Very High"
    },

    "Road Work": {
        Grip: "Very High",
        Comfort: "High",
        Water_Resistance: "Medium",
        Early_Drying: "High",
        Lightweight: "Medium",
        Durability: "Very High"
    },

    "Heavy Machinery": {
        Grip: "Very High",
        Comfort: "High",
        Water_Resistance: "High",
        Early_Drying: "Medium",
        Lightweight: "Low",
        Durability: "Very High"
    },

    "Industrial Work": {
        Grip: "Very High",
        Comfort: "High",
        Water_Resistance: "High",
        Early_Drying: "High",
        Lightweight: "Medium",
        Durability: "Very High"
    },


    /* =========================
       MEDICAL
    ========================= */

    "Diabetic-Friendly": {
        Grip: "High",
        Comfort: "Very High",
        Water_Resistance: "Medium",
        Early_Drying: "High",
        Lightweight: "High",
        Durability: "High"
    },

    "Long-Standing Comfort": {
        Grip: "High",
        Comfort: "Very High",
        Water_Resistance: "Low",
        Early_Drying: "Medium",
        Lightweight: "High",
        Durability: "High"
    },

    /*"Walking Support": {
        Grip: "High",
        Comfort: "Very High",
        Water_Resistance: "Medium",
        Early_Drying: "High",
        Lightweight: "High",
        Durability: "High"
    },

   "Recovery / Comfort": {
        Grip: "Medium",
        Comfort: "Very High",
        Water_Resistance: "Low",
        Early_Drying: "Medium",
        Lightweight: "Very High",
        Durability: "Medium"
    },*/


    /* =========================
       OFFICE
    ========================= */

    "Formal Office": {
        Grip: "Medium",
        Comfort: "High",
        Water_Resistance: "Medium",
        Early_Drying: "Medium",
        Lightweight: "High",
        Durability: "High"
    },

    "Long Standing": {
        Grip: "High",
        Comfort: "Very High",
        Water_Resistance: "Medium",
        Early_Drying: "High",
        Lightweight: "High",
        Durability: "High"
    },

    /*"Daily Walking": {
        Grip: "High",
        Comfort: "Very High",
        Water_Resistance: "Medium",
        Early_Drying: "High",
        Lightweight: "Very High",
        Durability: "High"
    },*/

    "Business Casual": {
        Grip: "Medium",
        Comfort: "Very High",
        Water_Resistance: "Medium",
        Early_Drying: "Medium",
        Lightweight: "High",
        Durability: "High"
    },


    /* =========================
       TRACKING
    ========================= */

    "Hiking": {
        Grip: "Very High",
        Comfort: "High",
        Water_Resistance: "High",
        Early_Drying: "very High",
        Lightweight: "High",
        Durability: "Very High"
    },
 
    "Forest Trek": {
        Grip: "Very High",
        Comfort: "High",
        Water_Resistance: "Very High",
        Early_Drying: "Very High",
        Lightweight: "High",
        Durability: "Very High"
    },

    "Mountain Trek": {
        Grip: "Very High",
        Comfort: "High",
        Water_Resistance: "Very High",
        Early_Drying: "High",
        Lightweight: "Medium",
        Durability: "Very High"
    },
/*
    "Long Distance": {
        Grip: "High",
        Comfort: "Very High",
        Water_Resistance: "Medium",
        Early_Drying: "High",
        Lightweight: "Very High",
        Durability: "High"
    },
*/
    "Rocky Terrain": {
        Grip: "Very High",
        Comfort: "High",
        Water_Resistance: "High",
        Early_Drying: "High",
        Lightweight: "Medium",
        Durability: "Very High"
    },


    /* =========================
       JOGGING
    ========================= */

    "Road Jogging": {
        Grip: "High",
        Comfort: "Very High",
        Water_Resistance: "Medium",
        Early_Drying: "High",
        Lightweight: "Very High",
        Durability: "High"
    },

    "Trail Jogging": {
        Grip: "Very High",
        Comfort: "Very High",
        Water_Resistance: "High",
        Early_Drying: "High",
        Lightweight: "High",
        Durability: "Very High"
    },

    "Treadmill Jogging": {
        Grip: "High",
        Comfort: "Very High",
        Water_Resistance: "Low",
        Early_Drying: "Medium",
        Lightweight: "Very High",
        Durability: "High"
    },

   /* "Long-Distance Jogging": {
        Grip: "High",
        Comfort: "Very High",
        Water_Resistance: "Medium",
        Early_Drying: "High",
        Lightweight: "Very High",
        Durability: "High"
    }*/

};


/* =========================================================
   5. SHOE CONFIGURATION
========================================================= */

/*
    IMPORTANT:

    "image" = where the clean shoe image will be placed.

    "parts" = which physical components actually exist /
              should be displayed for that subcategory.

    ML may predict all 6 components.

    Frontend will display only these parts.
*/


const shoeConfig = {


    /* =========================
       ARMY
    ========================= */

    "Army": {
        image: "../static/images2/army.png",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ],
        /*callouts: {

            Lining: {
                target: { x: 37.4, y: 10.3 }
            },

            Upper: {
                target: { x: 58.6, y: 63.5 }
            },

            Insole: {
                target: { x: 47.5, y: 38.1 }
            },

            Midsole: {
                target: { x: 45.0, y: 80.6 }
            },

            Outsole: {
                target: { x: 52.1, y: 92.8 }
            }

        }*/

    },

    "Navy": {
        image: "../static/images2/navy.png",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ]
    },

    "Air Force": {
        image: "../static/images2/air-force.jpg",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ]
    },

    "NSG": {
        image: "../static/images2/nsg.jpg",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole",
            "Toe Cap"
        ]
    },


    /* =========================
       ATHLETIC
    ========================= */

    "Running": {
        image: "/static/images/shoes/Athletic/running.png",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ]
    },

    "Football": {
        image: "../static/images2/football.png",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ]
    },

    "Cricket": {
        image: "../static/images2/cricket.png",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ]
    },

    "Basketball": {
        image: "../static/images2/basketball.jpg",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ]
    },

    "Gym Training": {
        image: "../static/images2/gym-training.jpg",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ]
    },


    /* =========================
       FARMING
    ========================= */

    "General Farming": {
        image: "../static/images2/Normal_farming.jpg",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ]
    },

    "Wet Farming": {
        image: "../static/images2/wet-farming.jpg",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ]
    },

    "Dry Field Work": {
        image: "../static/images2/dry-field.jpg",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ]
    },

    /*"Mud / Field Work": {
        image: "../static/images2/mud-field.jpg",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ]
    },*/


    /* =========================
       CONSTRUCTION
    ========================= */

    "General Construction": {
        image: "../static/images2/General-Construction.png",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole",
            "Toe Cap"
        ]
    },

    "Road Work": {
        image: "../static/images2/Road Work.png",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole",
            "Toe Cap"
        ]
    },

    "Heavy Machinery": {
        image: "../static/images2/heavy-machinery.png",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole",
            "Toe Cap"
        ]
    },

    "Industrial Work": {
        image: "../static/images2/industrial-work.png",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole",
            "Toe Cap"
        ]
    },


    /* =========================
       MEDICAL
    ========================= */

    "Diabetic-Friendly": {
        image: "../static/images2/diabetic.png",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ]
    },

    "Long-Standing Comfort": {
        image: "../static/images2/Doctor.jpg",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ]
    },

    /*"Walking Support": {
        image: "../static/images2/walking-support.png",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ]
    },

    "Recovery / Comfort": {
        image: "../static/images2/recovery.png",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ]
    },*/


    /* =========================
       OFFICE
    ========================= */

    "Formal Office": {
        image: "../static/images2/formal.jpg",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Outsole"
        ]
    },

    "Long Standing": {
        image: "../static/images2/long-standing.jpg",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ]
    },

    "Daily Walking": {
        image: "../static/images2/daily-walking.png",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ]
    },

    "Business Casual": {
        image: "../static/images2/bussiness_casual.png",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ]
    },


    /* =========================
       TRACKING
    ========================= */

    "Hiking": {
        image: "../static/images2/hiking.jpg",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ]
    },

    "Forest Trek": {
        image: "../static/images2/forest treking.jpg",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ]
    },

    "Mountain Trek": {
        image: "../static/images2/mountain.jpg",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole",
            "Toe Cap"
        ]
    },

    "Long Distance": {
        image: "../static/images2/long-distance.png",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ]
    },

    "Rocky Terrain": {
        image: "../static/images2/rock.jpg",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole",
            "Toe Cap"
        ]
    },


    /* =========================
       JOGGING
    ========================= */

    "Road Jogging": {
        image: "../static/images2/road.png",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ]
    },

    "Trail Jogging": {
        image: "../static/images2/trail.png",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ]
    },

    "Treadmill Jogging": {
        image: "../static/images2/treadmill.png",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ]
    },

    "Long-Distance Jogging": {
        image: "../static/images2/long-distance.png",
        parts: [
            "Upper",
            "Lining",
            "Insole",
            "Midsole",
            "Outsole"
        ]
    }

};


/* =========================================================
   6. COMPONENT INFORMATION
========================================================= */

const componentDescriptions = {

    "Upper":
        "The main outer structure of the footwear that provides protection, support and overall shape.",

    "Lining":
        "The inner material that provides comfort, moisture management and contact with the foot.",

    "Insole":
        "The footbed that directly supports the foot and contributes to overall comfort.",

    "Midsole":
        "The cushioning layer between the upper and outsole that helps absorb impact.",

    "Outsole":
        "The bottom layer of the footwear that contacts the ground and provides traction.",

    "Toe Cap":
        "A protective structure around the toe area designed to provide additional protection."
};


/* =========================================================
   7. CALL OUT ICONS
========================================================= */

const componentIcons = {

    "Upper": "✦",

    "Lining": "✧",

    "Insole": "✚",

    "Midsole": "◆",

    "Outsole": "✳",

    "Toe Cap": "●"

};


/* =========================================================
   8. GLOBAL STATE
========================================================= */

let selectedCategory = null;

let selectedSubcategory = null;

let currentRequirements = {};

let currentParts = [];

let currentImage = null;


/*
    This object will later contain actual ML output.

    Example:

    {
        Upper: [
            "Synthetic Leather",
            "Mesh",
            "TPU"
        ],

        Outsole: [
            "Rubber",
            "TPR",
            "PU"
        ]
    }
*/

let mlResults = {};


/* =========================================================
   9. DOM ELEMENTS
========================================================= */

const categoryMenu =
    document.getElementById("category-menu");

const categoryTitle =
    document.getElementById("category-title");

const categoryDescription =
    document.getElementById("category-description");

const breadcrumbCategory =
    document.getElementById("breadcrumb-category");

const selectedSubcategoryElement =
    document.getElementById("selected-subcategory");

const visualizationTitle =
    document.getElementById("visualization-title");

const shoeImageContainer =
    document.getElementById("shoe-image-container");

const calloutsContainer =
    document.getElementById("callouts-container");

const calloutLines =
    document.getElementById("callout-lines");

const requirementsContainer =
    document.getElementById("requirements-container");

const componentsContainer =
    document.getElementById("components-container");

const infoSubcategory =
    document.getElementById("info-subcategory");

const infoCategory =
    document.getElementById("info-category");

const recommendationResults =
    document.getElementById("recommendation-results");

const recommendationLoading =
    document.getElementById("recommendation-loading");

const recommendationButton =
    document.getElementById("recommendation-btn");

const resetButton =
    document.getElementById("reset-button");

const detailModal =
    document.getElementById("detail-modal");

const modalComponentName =
    document.getElementById("modal-component-name");

const modalComponentDescription =
    document.getElementById("modal-component-description");

const modalClose =
    document.querySelector(".modal-close");


/* =========================================================
   10. CREATE CATEGORY MENU
========================================================= */

function createCategoryMenu() {

    categoryMenu.innerHTML = "";

    Object.keys(categories).forEach(category => {

        const categoryItem =
            document.createElement("div");

        categoryItem.className =
            "category-item";


        /* -----------------------------------------
           CATEGORY BUTTON
        ----------------------------------------- */

        const categoryButton =
            document.createElement("button");

        categoryButton.type = "button";

        categoryButton.className =
            "category-button";


        /* Left side */

        const categoryMain =
            document.createElement("div");

        categoryMain.className =
            "category-main";


        /* Icon */

        const icon =
            document.createElement("span");

        icon.className =
            "category-icon";

        icon.textContent =
            categoryIcons[category] || "•";


        /* Name */

        const name =
            document.createElement("span");

        name.textContent =
            category;


        categoryMain.appendChild(icon);

        categoryMain.appendChild(name);


        /* Arrow */

        const arrow =
            document.createElement("span");

        arrow.className =
            "category-arrow";

        arrow.textContent =
            "›";


        categoryButton.appendChild(categoryMain);

        categoryButton.appendChild(arrow);


        /* -----------------------------------------
           SUBCATEGORY LIST
        ----------------------------------------- */

        const subcategoryList =
            document.createElement("div");

        subcategoryList.className =
            "subcategory-list";


        categories[category].forEach(subcategory => {

            const subcategoryButton =
                document.createElement("button");

            subcategoryButton.type = "button";

            subcategoryButton.className =
                "subcategory-button";

            subcategoryButton.textContent =
                subcategory;


            subcategoryButton.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                    selectSubcategory(
                        category,
                        subcategory
                    );

                }
            );


            subcategoryList.appendChild(
                subcategoryButton
            );

        });


        /* -----------------------------------------
           CATEGORY CLICK
        ----------------------------------------- */

        categoryButton.addEventListener(
            "click",
            function () {

                toggleCategory(
                    categoryItem,
                    category
                );

            }
        );


        categoryItem.appendChild(
            categoryButton
        );

        categoryItem.appendChild(
            subcategoryList
        );

        categoryMenu.appendChild(
            categoryItem
        );

    });

}


/* =========================================================
   11. TOGGLE CATEGORY
========================================================= */

function toggleCategory(
    categoryItem,
    category
) {

    const isExpanded =
        categoryItem.classList.contains(
            "expanded"
        );


    /* Close every category */

    document
        .querySelectorAll(".category-item")
        .forEach(item => {

            item.classList.remove(
                "expanded"
            );

        });


    /* Open selected */

    if (!isExpanded) {

        categoryItem.classList.add(
            "expanded"
        );

    }


    /* If category changed,
       select first subcategory */

    if (selectedCategory !== category) {

        const firstSubcategory =
            categories[category][0];

        selectSubcategory(
            category,
            firstSubcategory
        );

    }

}


/* =========================================================
   12. SELECT SUBCATEGORY
========================================================= */

function selectSubcategory(
    category,
    subcategory
) {

    selectedCategory =
        category;

    selectedSubcategory =
        subcategory;


    /* Get config */

    const config =
        shoeConfig[subcategory];


    if (!config) {

        console.error(
            "No shoe configuration found:",
            subcategory
        );

        return;

    }


    currentRequirements =
        requirements[subcategory] || {};

    currentParts =
        config.parts || [];

    currentImage =
        config.image || null;


    /* Reset old ML results */

    mlResults = {};


    /* -----------------------------------------
       UPDATE HEADER
    ----------------------------------------- */

    updateHeader();


    /* -----------------------------------------
       UPDATE IMAGE
    ----------------------------------------- */

    updateShoeImage();


    /* -----------------------------------------
       UPDATE REQUIREMENTS
    ----------------------------------------- */

    updateRequirements();


    /* -----------------------------------------
       UPDATE COMPONENTS
    ----------------------------------------- */

    updateComponents();


    /* -----------------------------------------
       CREATE CALLOUTS
    ----------------------------------------- */

    createCallouts();


    /* -----------------------------------------
       UPDATE ACTIVE MENU
    ----------------------------------------- */

    updateActiveMenu();


    /* -----------------------------------------
       CLEAR OLD RESULTS
    ----------------------------------------- */

    clearRecommendationResults();

}


/* =========================================================
   13. UPDATE HEADER
========================================================= */

function updateHeader() {

    categoryTitle.textContent =
        selectedCategory;

    categoryDescription.textContent =
        categoryDescriptions[
        selectedCategory
        ] || "";


    breadcrumbCategory.textContent =
        selectedSubcategory;


    selectedSubcategoryElement.textContent =
        selectedSubcategory;


    visualizationTitle.textContent =
        selectedSubcategory;


    infoSubcategory.textContent =
        selectedSubcategory;


    infoCategory.textContent =
        selectedCategory;

}


/* =========================================================
   14. UPDATE ACTIVE MENU
========================================================= */

function updateActiveMenu() {

    document
        .querySelectorAll(".category-item")
        .forEach(item => {

            item.classList.remove(
                "active"
            );

        });


    document
        .querySelectorAll(
            ".subcategory-button"
        )
        .forEach(button => {

            button.classList.remove(
                "active"
            );

        });


    document
        .querySelectorAll(".category-item")
        .forEach(item => {

            const button =
                item.querySelector(
                    ".category-button"
                );

            const subcategoryButtons =
                item.querySelectorAll(
                    ".subcategory-button"
                );


            if (
                button &&
                button
                    .querySelector(
                        ".category-main span:last-child"
                    )
                    ?.textContent ===
                selectedCategory
            ) {

                item.classList.add(
                    "active"
                );

                item.classList.add(
                    "expanded"
                );

            }


            subcategoryButtons
                .forEach(subButton => {

                    if (
                        subButton.textContent ===
                        selectedSubcategory
                    ) {

                        subButton.classList.add(
                            "active"
                        );

                    }

                });

        });

}


/* =========================================================
   15. UPDATE SHOE IMAGE
========================================================= */

function updateShoeImage() {

    shoeImageContainer.innerHTML = "";


    if (!currentImage) {

        showImagePlaceholder();

        return;

    }


    const image =
        document.createElement("img");

    image.src =
        currentImage;

    image.alt =
        `${selectedSubcategory} footwear`;


    /* If image exists */

    image.onload =
        function () {

            shoeImageContainer.innerHTML = "";

            shoeImageContainer.appendChild(
                image
            );

        };


    /* If image doesn't exist yet */

    image.onerror =
        function () {

            showImagePlaceholder();

        };


    shoeImageContainer.appendChild(
        image
    );

}


/* =========================================================
   16. IMAGE PLACEHOLDER
========================================================= */

function showImagePlaceholder() {

    shoeImageContainer.innerHTML = `

        <div class="shoe-placeholder">

            <div class="placeholder-icon">
                👟
            </div>

            <strong>
                ${selectedSubcategory} Shoe
            </strong>

            <span>
                Shoe image will be added here
            </span>

        </div>

    `;

}


/* =========================================================
   17. UPDATE REQUIREMENTS
========================================================= */

function updateRequirements() {

    requirementsContainer.innerHTML = "";


    const requirementNames = [
        "Grip",
        "Comfort",
        "Water_Resistance",
        "Early_Drying",
        "Lightweight",
        "Durability"
    ];


    requirementNames.forEach(name => {

        const value =
            currentRequirements[name] ||
            "Medium";


        const item =
            document.createElement("div");

        item.className =
            "requirement-item";


        const top =
            document.createElement("div");

        top.className =
            "requirement-top";


        const requirementName =
            document.createElement("span");

        requirementName.className =
            "requirement-name";

        requirementName.textContent =
            name.replace(
                "_",
                " "
            );


        const requirementValue =
            document.createElement("span");

        requirementValue.className =
            "requirement-value";

        requirementValue.textContent =
            value;


        top.appendChild(
            requirementName
        );

        top.appendChild(
            requirementValue
        );


        /* Bar */

        const bar =
            document.createElement("div");

        bar.className =
            "requirement-bar";


        const fill =
            document.createElement("div");

        fill.className =
            "requirement-fill";


        fill.style.width =
            getRequirementWidth(value);


        bar.appendChild(
            fill
        );


        item.appendChild(
            top
        );

        item.appendChild(
            bar
        );


        requirementsContainer.appendChild(
            item
        );

    });

}


/* =========================================================
   18. REQUIREMENT BAR WIDTH
========================================================= */

function getRequirementWidth(value) {

    switch (value) {

        case "Low":
            return "25%";

        case "Medium":
            return "50%";

        case "High":
            return "75%";

        case "Very High":
            return "100%";

        default:
            return "50%";

    }

}


/* =========================================================
   19. UPDATE COMPONENTS
========================================================= */

function updateComponents() {

    componentsContainer.innerHTML = "";


    currentParts.forEach(part => {

        const item =
            document.createElement("div");

        item.className =
            "component-item";


        const name =
            document.createElement("span");

        name.textContent =
            part;


        const button =
            document.createElement("button");

        button.type = "button";

        button.textContent =
            "+";


        button.addEventListener(
            "click",
            function () {

                openComponentModal(
                    part
                );

            }
        );


        item.appendChild(
            name
        );

        item.appendChild(
            button
        );


        componentsContainer.appendChild(
            item
        );

    });

}


/* =========================================================
   20. CREATE CALLOUTS
========================================================= */

function createCallouts() {

    calloutsContainer.innerHTML = "";

    calloutLines.innerHTML = "";


    currentParts.forEach(
        (part, index) => {

            createCallout(
                part,
                index
            );

        }
    );


    /*
        Wait until browser renders the image
        and callouts before drawing SVG lines.
    */

    setTimeout(
        drawCalloutLines,
        100
    );

}


/* =========================================================
   21. CREATE ONE CALLOUT
========================================================= */

function createCallout(
    part,
    index
) {

    const callout =
        document.createElement("div");


    callout.className =
        "material-callout";


    /*
        Important:

        CSS position class.
    */

    callout.classList.add(
        getCalloutPositionClass(
            part,
            index
        )
    );


    callout.dataset.part =
        part;


    /* Header */

    const header =
        document.createElement("div");

    header.className =
        "callout-header";


    const title =
        document.createElement("div");

    title.className =
        "callout-title";


    const icon =
        document.createElement("span");

    icon.className =
        "callout-icon";

    icon.textContent =
        componentIcons[part] || "•";


    const heading =
        document.createElement("h3");

    heading.textContent =
        part;


    title.appendChild(
        icon
    );

    title.appendChild(
        heading
    );


    /* Plus */

    const moreButton =
        document.createElement("button");

    moreButton.type =
        "button";

    moreButton.className =
        "callout-more";

    moreButton.textContent =
        "+";


    moreButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            openComponentModal(
                part
            );

        }
    );


    header.appendChild(
        title
    );

    header.appendChild(
        moreButton
    );


    /* Material list */

    const list =
        document.createElement("ol");

    list.className =
        "material-list";


    const materials =
        mlResults[part] || [
            "Awaiting ML",
            "Awaiting ML",
            "Awaiting ML"
        ];


    materials
        .slice(0, 3)
        .forEach(
            (material, index) => {

                const li =
                    document.createElement("li");


                const number =
                    document.createElement("span");

                number.className =
                    "material-number";

                number.textContent =
                    `${index + 1}.`;


                const materialName =
                    document.createElement("span");

                materialName.textContent =
                    material;


                li.appendChild(
                    number
                );

                li.appendChild(
                    materialName
                );


                list.appendChild(
                    li
                );

            }
        );


    callout.appendChild(
        header
    );

    callout.appendChild(
        list
    );


    calloutsContainer.appendChild(
        callout
    );

}


/* =========================================================
   22. CALLOUT POSITION
========================================================= */

/*
    These are general positions.

    Later, when we have the actual 34 images,
    we can give every subcategory its own
    exact coordinates.
*/

function getCalloutPositionClass(
    part,
    index
) {

    switch (part) {

        case "Upper":
            return "callout-upper";

        case "Lining":
            return "callout-lining";

        case "Insole":
            return "callout-insole";

        case "Midsole":
            return "callout-midsole";

        case "Outsole":
            return "callout-outsole";

        case "Toe Cap":
            return "callout-toe-cap";

        default:
            return "callout-upper";

    }

}
/* =========================================================
   25. COMPONENT MODAL
========================================================= */

function openComponentModal(part) {

    modalComponentName.textContent =
        part;


    modalComponentDescription.textContent =
        componentDescriptions[part] ||
        "Component information is not available.";


    detailModal.classList.add(
        "show"
    );

}


function closeComponentModal() {

    detailModal.classList.remove(
        "show"
    );

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeComponentModal
    );

}


if (detailModal) {

    detailModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                detailModal
            ) {

                closeComponentModal();

            }

        }
    );

}


/* =========================================================
   26. UPDATE MATERIAL RESULTS
========================================================= */

/*
    This function will be called after Flask
    sends the KNN output.

    Example:

    updateMLResults({
        Upper: [
            "Synthetic Leather",
            "Mesh",
            "TPU"
        ],

        Outsole: [
            "Rubber",
            "TPR",
            "PU"
        ]
    });
*/

function updateMLResults(results) {

    mlResults =
        results || {};


    /*
        Re-create callouts so the materials
        appear under the correct part.
    */

    createCallouts();


    /*
        Create bottom result cards.
    */

    createCompleteResults();

}


/* =========================================================
   27. CREATE COMPLETE RESULT CARDS
========================================================= */

function createCompleteResults() {

    recommendationResults.innerHTML = "";


    /*
        Only display components that belong
        to the selected subcategory.
    */

    currentParts.forEach(part => {

        const materials =
            mlResults[part];


        /*
            If ML hasn't returned this part,
            don't create a fake result.
        */

        if (
            !materials ||
            materials.length === 0
        ) {

            return;

        }


        const card =
            document.createElement("div");

        card.className =
            "result-card";


        const title =
            document.createElement("h3");

        title.textContent =
            part;


        const list =
            document.createElement("ul");


        materials
            .slice(0, 3)
            .forEach(
                (material, index) => {

                    const li =
                        document.createElement("li");


                    li.innerHTML = `
                        <span class="result-rank">
                            ${index + 1}
                        </span>

                        ${escapeHTML(material)}
                    `;


                    list.appendChild(
                        li
                    );

                }
            );


        card.appendChild(
            title
        );

        card.appendChild(
            list
        );


        recommendationResults.appendChild(
            card
        );

    });

}


/* =========================================================
   28. ESCAPE HTML
========================================================= */

function escapeHTML(value) {

    const div =
        document.createElement("div");

    div.textContent =
        value;

    return div.innerHTML;

}


/* =========================================================
   29. GET MATERIAL RECOMMENDATION
========================================================= */

/*
    IMPORTANT:

    This button is the future Flask trigger.

    We are NOT generating fake ML predictions.

    Later:

        button click
              ↓
        fetch("/predict")
              ↓
        Flask
              ↓
        KNN
              ↓
        JSON
              ↓
        updateMLResults()
*/

if (recommendationButton) {

    recommendationButton.addEventListener(
        "click",
        function () {

            if (
                !selectedCategory ||
                !selectedSubcategory
            ) {

                alert(
                    "Please select a footwear subcategory first."
                );

                return;

            }


            console.log(
                "Ready to send data to Flask:"
            );


            console.log({

                category:
                    selectedCategory,

                subcategory:
                    selectedSubcategory,

                requirements:
                    currentRequirements,

                parts:
                    currentParts

            });


            /*
                TEMPORARY:

                No fake ML output.

                Flask connection will be added
                in the next stage.
            */

            showMLConnectionStatus();

        }
    );

}


/* =========================================================
   30. TEMPORARY ML STATUS
========================================================= */
/*
function showMLConnectionStatus() {

    recommendationResults.innerHTML = `

        <div class="result-card">

            <h3>
                ML System
            </h3>

            <ul>

                <li>
                    <span class="result-rank">
                        ✓
                    </span>

                    Footwear selected
                </li>

                <li>
                    <span class="result-rank">
                        ✓
                    </span>

                    Requirements prepared
                </li>

                <li>
                    <span class="result-rank">
                        →
                    </span>

                    Waiting for Flask + KNN
                </li>

            </ul>

        </div>

    `;

}
*/
if (recommendationButton) {

    recommendationButton.addEventListener(
        "click",
        async function () {

            if (
                !selectedCategory ||
                !selectedSubcategory
            ) {
                alert(
                    "Please select a footwear subcategory first."
                );

                return;
            }


            const dataToSend = {

                category:
                    selectedCategory,

                subcategory:
                    selectedSubcategory,

                requirements:
                    currentRequirements,

                parts:
                    currentParts
            };


            console.log(
                "🔥 Sending data to Flask:"
            );

            console.log(dataToSend);


            try {

                const response =
                    await fetch(
                        "/recommend",
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify(
                                    dataToSend
                                )
                        }
                    );


                console.log(
                    "🔥 Flask response received"
                );

                console.log(
                    "Status:",
                    response.status
                );


                const result =
                    await response.json();


                console.log(
                    "🔥 Response from Flask:"
                );

                console.log(result);


                // =========================
                // ML RESULT → JS
                // =========================

                updateMLResults(
                    result.recommendations
                );


            } catch (error) {

                console.error(
                    "❌ Error sending data to Flask:",
                    error
                );

            }

        }
    );

}
function clearRecommendationResults() {

    if (recommendationResults) {
        recommendationResults.innerHTML = "";
    }

    if (recommendationLoading) {
        recommendationLoading.innerHTML = "";
    }

}
/* =========================================================
   31. RESET PAGE
========================================================= */

if (resetButton) {

    resetButton.addEventListener(
        "click",
        function () {

            selectedCategory = null;

            selectedSubcategory = null;

            currentRequirements = {};

            currentParts = [];

            currentImage = null;

            mlResults = {};


            categoryTitle.textContent =
                "Select Category";


            categoryDescription.textContent =
                "Select a work environment to design suitable footwear for that environment.";


            breadcrumbCategory.textContent =
                "Subcategory";


            selectedSubcategoryElement.textContent =
                "None";


            visualizationTitle.textContent =
                "Select a subcategory";


            infoSubcategory.textContent =
                "None";


            infoCategory.textContent =
                "No category selected";


            requirementsContainer.innerHTML =
                "";


            componentsContainer.innerHTML =
                "";


            calloutsContainer.innerHTML =
                "";


            calloutLines.innerHTML =
                "";


            recommendationResults.innerHTML =
                "";


            showInitialPlaceholder();


            document
                .querySelectorAll(
                    ".category-item"
                )
                .forEach(item => {

                    item.classList.remove(
                        "active",
                        "expanded"
                    );

                });


            document
                .querySelectorAll(
                    ".subcategory-button"
                )
                .forEach(button => {

                    button.classList.remove(
                        "active"
                    );

                });

        }
    );

}


/* =========================================================
   32. INITIAL PLACEHOLDER
========================================================= */

function showInitialPlaceholder() {

    shoeImageContainer.innerHTML = `

        <div class="shoe-placeholder">

            <div class="placeholder-icon">
                👟
            </div>

            <strong>
                Select a subcategory
            </strong>

            <span>
                Your footwear design will appear here
            </span>

        </div>

    `;

}


/* =========================================================
   33. WINDOW RESIZE
========================================================= */

window.addEventListener(
    "resize",
    function () {

        if (
            selectedSubcategory &&
            currentParts.length > 0
        ) {

            drawCalloutLines();

        }

    }
);


/* =========================================================
   34. INITIALIZE PAGE
========================================================= */

function initializePage() {

    // Create category sidebar
    createCategoryMenu();

    // Default category
    const initialCategory = "Army";

    // First subcategory of Army
    const initialSubcategory =
        categories[initialCategory][0];

    // Select it
    selectSubcategory(
        initialCategory,
        initialSubcategory
    );
}

initializePage();

document.getElementById("recommendation-btn").addEventListener("click", async function () {

    const dataToSend = {
        requirements: currentRequirements
    };

    console.log("Sending data to Flask:");
    console.log(dataToSend);

    try {

        const response = await fetch("/recommend", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(dataToSend)
        });

        const result = await response.json();

        console.log("Response from Flask:");
        console.log(result);

        updateMLResults(
            result.recommendations
        );

    } catch (error) {

        console.error("Error sending data to Flask:", error);

    }

});