from openai import OpenAI

class ContractReviewer:
    def __init__(self, api_key):
        self.client = OpenAI(api_key=api_key)
    
    def review_contract(self, contract_text):
        """Analyzes smart contracts for potential risks"""
        prompt = f"""Analyze this smart contract for security risks and legal issues:
        
        {contract_text}
        
        Provide analysis in the following format:
        - Summary: [brief summary]
        - Risks: [list of risks]
        - Recommendations: [list of recommendations]"""

        response = self.client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a smart contract security expert."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.1
        )
        
        return response.choices[0].message.content.strip()