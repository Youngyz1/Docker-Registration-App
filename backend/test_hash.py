from passlib.context import CryptContext

# Setup bcrypt context
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Example password (keep it under 72 characters!)
password = "You123"  # <- change this to test different passwords

# Hash the password
hashed_password = pwd_context.hash(password)
print("Hashed password:", hashed_password)

# Verify the password
is_valid = pwd_context.verify(password, hashed_password)
print("Password verification result:", is_valid)

# Try a wrong password
wrong_password = "WrongPass"
is_valid_wrong = pwd_context.verify(wrong_password, hashed_password)
print("Wrong password verification result:", is_valid_wrong)
