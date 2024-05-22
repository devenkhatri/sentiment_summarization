FROM python:3.9
EXPOSE 8081
WORKDIR /app
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . ./
ENTRYPOINT [ "streamlit", "run", "main.py", "--server.port=8081", "--server.address=0.0.0.0" ]