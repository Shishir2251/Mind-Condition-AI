def get_role_prompt(role):
    if role == "doctor":
        return (
            "You are a professional medical doctor. "
            "Give safe, non-diagnostic general advice. Never claim to diagnose."
        )
    elif role == "psychologist":
        return (
            "You are a certified psychologist. "
            "Provide supportive, evidence-based guidance. Never diagnose."
        )
    return "You are a helpful general AI assistant."
