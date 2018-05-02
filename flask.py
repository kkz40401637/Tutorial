from flask import Flask , redirect , url_for 
app = Flask(__name__)

@app.route("/private")
def private():
	return redirect(url_for('login'))

@app.route('/login')
def login():
	return "Now we would get usernaem & password"

if __name__ == "__main__":
        app.run(debug=True)