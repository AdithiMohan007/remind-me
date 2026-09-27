function showActivity() {
    const activity = document.getElementById("activityInput").value.toLowerCase();
    const result = document.getElementById("result");

    if (activity === "") {
        result.textContent = "Please enter something 😊";
        return;
    }

    // TRIP
    if (activity.includes("trip") || activity.includes("travel")) {
        askTripQuestion();
        result.innerHTML = "";
        return;
    }

    // COLLEGE
    if (activity.includes("college")) {
        showChecklist([
    // same items...
            "College ID / Documents",
            "Stationery",
            "Laptop and charger",
            "Water bottle",
            "Important certificates",
            "Timetable"
             ], "college");

    return;
}
       

    // EXAM
    if (activity.includes("exam")) {
    showChecklist([
        "Hall ticket",
        "Pens and pencils",
        "Student ID",
        "Calculator, if allowed",
        "Water bottle",
        "Check exam time and room"
    ], "exam");

    return;
}

    // MOVING HOUSE
    if (activity.includes("move") || activity.includes("moving")) {
        showChecklist([
            "Important documents",
            "Pack clothes",
            "Pack toiletries",
            "Phone chargers",
            "Keys",
            "Label important boxes",
            "Check electricity/water arrangements"
        ]);
        return;
    }

    // NEW JOB
    if (activity.includes("job") || activity.includes("work")) {
        showChecklist([
            "ID / Documents",
            "Work clothes",
            "Laptop and charger",
            "Notebook and pen",
            "Check workplace location",
            "Check joining time"
        ]);
        return;
    }

    // PARTY / BIRTHDAY
    if (activity.includes("party") || activity.includes("birthday")) {
        showChecklist([
            "Invitations",
            "Cake",
            "Decorations",
            "Food and drinks",
            "Music / speakers",
            "Camera / phone"
        ]);
        return;
    }

    // DEFAULT
result.innerHTML = `
    <h2>Tell us a little more 🧠</h2>
    <p>We don't have a checklist for this yet.</p>
    <p>What is the most important part of your plan?</p>

    <input 
        type="text" 
        id="extraInfo" 
        placeholder="Example: camping with friends"
    >

    <button onclick="createCustomList()">Continue →</button>
`;
}
function askTripQuestion() {
    const questions = document.getElementById("questions");

    questions.innerHTML = `
        <h3>Tell us a little more about your trip ✈️</h3>

        <label>Where are you going?</label>

        <select id="tripType">
            <option value="">Choose one</option>
            <option value="beach">🏖️ Beach</option>
            <option value="mountain">🏔️ Mountain</option>
            <option value="city">🏙️ City</option>
            <option value="abroad">🌍 Abroad</option>
        </select>

        <button onclick="createTripList()">Continue →</button>
    `;
}
function showChecklist(items, category) {
    const result = document.getElementById("result");

    result.innerHTML = `
    <h2>Things you might forget 🧠</h2>

    <div class="forget-tips">
    <h3>💡 People Usually Forget...</h3>

    ${
        category === "beach"
        ? `
            <p>🧴 Sunscreen</p>
            <p>🩴 Comfortable footwear</p>
            <p>🕶️ Sunglasses</p>
        `
        : category === "mountain"
        ? `
            <p>🧥 Warm clothes</p>
            <p>🥾 Proper shoes</p>
            <p>🔦 Torch</p>
        `
        : category === "city"
        ? `
            <p>🔋 Power bank</p>
            <p>🗺️ Navigation / maps</p>
            <p>🎫 Tickets / reservations</p>
        `
        : category === "abroad"
        ? `
            <p>🛂 Passport</p>
            <p>💳 International payment method</p>
            <p>📄 Travel documents</p>
        `
        : category === "college"
        ? `
            <p>🪪 College ID card</p>
            <p>📚 Required books / notes</p>
            <p>✏️ Extra stationery</p>
        `
        : category === "exam"
        ? `
            <p>🎫 Hall ticket</p>
            <p>🖊️ Extra pen</p>
            <p>🪪 Student ID</p>
        `
        : `
            <p>🔋 Power bank</p>
            <p>🪪 Important documents</p>
            <p>💊 Medicines</p>
        `
    }
</div>

    <p id="progress">0 / ${items.length} completed</p>
        <button onclick="saveChecklist()">💾 Save Checklist</button>
        <button onclick="startOver()">↻ Start Over</button>

        <div id="customItemBox">
            <input
                type="text"
                id="customItem"
                placeholder="I might forget..."
            >

            <button onclick="addCustomItem()">＋ Add</button>
        </div>
    `;

    items.forEach(function(item) {
        result.innerHTML += `
            <label class="check-item">
                <input type="checkbox">
                ${item}
            </label>
        `;
    });
}
function addCustomItem() {
    const input = document.getElementById("customItem");
    const item = input.value.trim();

    if (item === "") {
        alert("Please enter something 😊");
        return;
    }

    const label = document.createElement("label");
    label.className = "check-item";

    label.innerHTML = `
        <input type="checkbox">
        ${item}
    `;

    document.getElementById("result").appendChild(label);

    input.value = "";
}
function createTripList() {
    const tripType = document.getElementById("tripType").value;

    if (tripType === "") {
        alert("Please choose where you're going 😊");
        return;
    }

    let items = [
        "Phone and charger",
        "Wallet / money",
        "Important documents",
        "Medicines"
    ];

    if (tripType === "beach") {
        items.push(
            "Sunscreen",
            "Swimwear",
            "Sunglasses"
        );

    } else if (tripType === "mountain") {
        items.push(
            "Warm clothes",
            "Comfortable shoes",
            "Water bottle"
        );

    } else if (tripType === "city") {
        items.push(
            "Map / navigation",
            "Power bank",
            "Comfortable shoes"
        );

    } else if (tripType === "abroad") {
        items.push(
            "Passport",
            "Visa / travel documents",
            "Foreign currency",
            "Travel insurance documents"
        );
    }

    document.getElementById("questions").innerHTML = "";

   showChecklist(items, tripType);
}
function createCustomList() {
    const info = document.getElementById("extraInfo").value.toLowerCase();

    if (info === "") {
        alert("Please tell us a little more 😊");
        return;
    }

    if (info.includes("camp") || info.includes("camping")) {

        showChecklist([
            "Tent",
            "Sleeping bag",
            "Torch",
            "Food and water",
            "First-aid kit",
            "Warm clothes",
            "Power bank"
        ]);

    } else {

        showChecklist([
            "Phone and charger",
            "Wallet / money",
            "Important documents",
            "Keys",
            "Water bottle",
            "Anything specific you need for your plan"
        ]);
    }
}
function saveChecklist() {
    const items = [];

    document.querySelectorAll("#result .check-item").forEach(function(item) {
        const checkbox = item.querySelector("input");

        items.push({
            text: item.textContent.trim(),
            checked: checkbox.checked
        });
    });

    localStorage.setItem("dontForgetChecklist", JSON.stringify(items));

    alert("Checklist saved! 💾✨");
}
function loadChecklist() {
    const saved = localStorage.getItem("dontForgetChecklist");

    if (!saved) {
        return;
    }

    const items = JSON.parse(saved);

    const result = document.getElementById("result");

    result.innerHTML = `
        <h2>Saved Checklist 💾</h2>

        <p id="progress">0 / ${items.length} completed</p>

        <button onclick="clearChecklist()">🗑️ Clear Saved Checklist</button>

        <div id="customItemBox">
            <input
                type="text"
                id="customItem"
                placeholder="I might forget..."
            >

            <button onclick="addCustomItem()">＋ Add</button>
        </div>
    `;

    items.forEach(function(item) {
        result.innerHTML += `
            <label class="check-item">
                <input type="checkbox" ${item.checked ? "checked" : ""}>
                ${item.text}
            </label>
        `;
    });
}
window.addEventListener("load", loadChecklist);
function clearChecklist() {
    localStorage.removeItem("dontForgetChecklist");

    document.getElementById("result").innerHTML = "";

    alert("Saved checklist cleared 🗑️");
}
function startOver() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("questions").innerHTML = "";
    document.getElementById("activityInput").value = "";
}
function quickStart(activity) {
    document.getElementById("activityInput").value = activity;
    showActivity();
}