from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()


origins = [
    "http://localhost:5173",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str



@app.get("/")
def root():
    return {"message": "Backend çalışıyor 🚀"}



@app.post("/chat")
def chat(request: ChatRequest):

    return {
        "reply": f"Mesajını aldım: {request.message}"
    }