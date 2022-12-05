from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def getRoutes():
    return ["/notes", "notes/<pk>"]
