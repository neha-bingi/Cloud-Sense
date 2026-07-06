def calculate_costs(users, storage, ai_required):

    # ---------- AWS ----------
    aws = 50

    if users > 100000:
        aws += 500
    elif users > 50000:
        aws += 300
    elif users > 10000:
        aws += 150
    else:
        aws += 80

    if storage == "Very High":
        aws += 250
    elif storage == "High":
        aws += 150
    elif storage == "Medium":
        aws += 75
    else:
        aws += 30

    if ai_required:
        aws += 180

    # ---------- Azure ----------
    azure = 45

    if users > 100000:
        azure += 520
    elif users > 50000:
        azure += 320
    elif users > 10000:
        azure += 170
    else:
        azure += 90

    if storage == "Very High":
        azure += 230
    elif storage == "High":
        azure += 145
    elif storage == "Medium":
        azure += 80
    else:
        azure += 35

    if ai_required:
        azure += 160

    # ---------- GCP ----------
    gcp = 40

    if users > 100000:
        gcp += 470
    elif users > 50000:
        gcp += 280
    elif users > 10000:
        gcp += 140
    else:
        gcp += 75

    if storage == "Very High":
        gcp += 220
    elif storage == "High":
        gcp += 130
    elif storage == "Medium":
        gcp += 70
    else:
        gcp += 30

    if ai_required:
        gcp += 120

    return {
        "aws_cost": aws,
        "azure_cost": azure,
        "gcp_cost": gcp,
    }