# ================================
# 1️⃣ Imports
# ================================
import torch
from transformers import GPT2Tokenizer, GPT2LMHeadModel

# ================================
# 2️⃣ Load GPT Tokenizer & Model
# ================================
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2LMHeadModel.from_pretrained("gpt2")

model.eval()  # training nahi, sirf generate

# ================================
# 3️⃣ Chatbot Response Function
# ================================
def gpt_chatbot(prompt):
    # User text → tokens
    inputs = tokenizer.encode(prompt, return_tensors="pt")

    # GPT se text generate karwana
    with torch.no_grad():
        outputs = model.generate(
            inputs,
            max_length=80,
            num_return_sequences=1,
            pad_token_id=tokenizer.eos_token_id,
            do_sample=True,
            top_k=50,
            top_p=0.95
        )

    # Tokens → text
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return response

# ================================
# 4️⃣ Chat Loop
# ================================
print("\n🤖 GPT Chatbot Ready (type 'exit' to quit)\n")

while True:
    user_input = input("You: ")
    if user_input.lower() == "exit":
        print("Chatbot: Allah Hafiz 👋")
        break

    reply = gpt_chatbot(user_input)
    print("Chatbot:", reply)
