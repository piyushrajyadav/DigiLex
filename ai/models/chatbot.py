from openai import OpenAI
from ..utils.nlp_utils import preprocess_input

class LegalChatbot:
    def __init__(self, api_key):
        self.client = OpenAI(api_key=api_key)
        self.context = []
    
    def chat(self, user_input):
        """Handles conversational legal advice"""
        cleaned_input = preprocess_input(user_input)
        
        self.context.append({"role": "user", "content": cleaned_input})
        
        response = self.client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a legal assistant. Provide accurate legal information."}
            ] + self.context[-5:],  # Maintain conversation context
            temperature=0.3
        )
        
        answer = response.choices[0].message.content.strip()
        self.context.append({"role": "assistant", "content": answer})
        
        return answer