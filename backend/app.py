from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import GPT2Tokenizer, GPT2LMHeadModel
import torch

app = Flask(__name__)
CORS(app)

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2LMHeadModel.from_pretrained("gpt2")
model.eval()

def generate_response(prompt):
    inputs = tokenizer.encode(prompt, return_tensors="pt")

    with torch.no_grad():
     outputs = model.generate(
    inputs,
    max_length=120,
    do_sample=True,
    top_k=50,
    top_p=0.9,
    repetition_penalty=1.2,
    pad_token_id=tokenizer.eos_token_id
)

    return tokenizer.decode(outputs[0], skip_special_tokens=True)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_message = data["message"]

    prompt = f"""
You are a helpful assistant.
User: {user_message}
Assistant:
"""

    response = generate_response(prompt)

    return jsonify({"reply": response})

if __name__ == "__main__":
    app.run(port=5001, debug=True)