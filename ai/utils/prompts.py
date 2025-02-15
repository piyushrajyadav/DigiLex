DOCUMENT_PROMPTS = {
    "nda": """Generate a Non-Disclosure Agreement (NDA) between {party1} and {party2} with the following terms:
    - Confidentiality period: {duration}
    - Scope: {scope}
    - Jurisdiction: {jurisdiction}
    Include standard NDA clauses and ensure compliance with {jurisdiction} law.""",
    
    "employment_contract": """Create an employment contract for a {position} position with:
    - Salary: {salary}
    - Benefits: {benefits}
    - Termination clauses: {termination_clauses}
    Ensure compliance with labor laws in {country}.""",
    
    "lease_agreement": """Draft a residential lease agreement for {property_address} with:
    - Term: {lease_term}
    - Rent: ${rent_amount}/month
    - Security deposit: ${deposit_amount}
    Include standard clauses for {state} residential leases."""
}