def extract_features(description: str):
    text = description.lower()

    features = {
        "project_type": "general",
        "ai": False,
        "database": "PostgreSQL",
        "storage": "Low",
        "users": 10000,
        "realtime": False,
    }

    # -----------------------
    # Project Type
    # -----------------------

    if "food" in text or "delivery" in text:
        features["project_type"] = "food_delivery"
        features["users"] = 50000

    elif "ecommerce" in text or "shopping" in text:
        features["project_type"] = "ecommerce"
        features["users"] = 25000

    elif "education" in text or "learning" in text:
        features["project_type"] = "education"
        features["users"] = 30000

    elif "healthcare" in text or "hospital" in text:
        features["project_type"] = "healthcare"
        features["users"] = 20000

    elif "social media" in text:
        features["project_type"] = "social_media"
        features["users"] = 100000
        features["database"] = "MongoDB"
        features["storage"] = "Very High"

    # -----------------------
    # AI Detection
    # -----------------------

    if (
        "ai" in text
        or "chatbot" in text
        or "machine learning" in text
    ):
        features["ai"] = True

    # -----------------------
    # Storage Detection
    # -----------------------

    if (
        "image" in text
        or "images" in text
        or "video" in text
        or "videos" in text
        or "media" in text
    ):
        features["storage"] = "High"

    # -----------------------
    # Realtime Detection
    # -----------------------

    if (
        "live" in text
        or "realtime" in text
        or "real-time" in text
        or "tracking" in text
        or "chat" in text
        or "streaming" in text
    ):
        features["realtime"] = True

    return features