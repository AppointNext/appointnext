---

# AppointNext: Appointment Management App for Doctors

AppointNext is a comprehensive appointment management application designed specifically for doctors to streamline their appointment scheduling and patient management. This application focuses on improving lifestyle by reducing the hassle of managing appointments manually.

## Features

- Easy appointment scheduling and management
- Patient record keeping
- Notifications and reminders for upcoming appointments
- User-friendly interface for both doctors and patients

## Tech Stack

- **Frontend**: React, Vite
- **Backend**: Django
- **Database**: SQLite

### Now we are migrating to node backend for future

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Python](https://www.python.org/)
- [pip](https://pip.pypa.io/en/stable/)
- [Git](https://git-scm.com/)

### Clone the Repository

```bash
git clone https://github.com/Latish705/Appoint-next.git
```

## Running the Client (Frontend)

Navigate to the `client` directory and install the dependencies:

```bash
cd client
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend should now be running on [http://localhost:3000](http://localhost:3000).

## Running the Server (Backend)

Navigate to the `server` directory and set up the backend:

If you are in the root folder where you cloned the repository:

```bash
cd server
```

If you are in the `client` directory:

```bash
cd ..
cd server
```

### Setting Up the Python Environment

Create a virtual environment and activate it:

```bash
python -m venv env
source env/bin/activate  # On Windows use `env\Scripts\activate`
```

### Installing Dependencies

Install the required Python packages:

```bash
pip install -r requirements.txt
```

### Database Setup

Since we're using SQLite, there's no need for additional database setup. Just apply the migrations:

```bash
python manage.py migrate
```

Create a superuser to access the Django admin:

```bash
python manage.py createsuperuser
```

### Running the Server

Start the Django development server:

```bash
python manage.py runserver
```

The backend should now be running on [http://localhost:8000](http://localhost:8000).

## Directory Structure

```
AppointNext/
├── client/                 # Frontend code
│   ├── src/                # Source files
│   ├── public/             # Public assets
│   ├── package.json        # NPM dependencies
│   └── ...                 # Other frontend files
│
├── server/                 # Backend code
│   ├── manage.py           # Django management script
│   ├── server/             # Django project files
│   ├── app/                # Django app files
│   ├── env/                # Virtual environment
│   ├── requirements.txt    # Python dependencies
│   └── ...                 # Other backend files
│
└── README.md               # This README file
```

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the GPL License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to reach out:

- **Author**: Latish Adwani
- **Email**: [latishadwani705@gmail.com](mailto:latishadwani705@gmail.com)

---

By following the instructions in this README, you should be able to set up and run the AppointNext project locally, and contribute to its development. Thank you for using AppointNext!

