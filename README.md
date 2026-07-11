# 🌱 Environment Safety Monitoring System

The **Environment Safety Monitoring System** is a Spring Boot-based web application designed to monitor environmental conditions and provide safety-related information. The application enables users to manage environmental data efficiently through REST APIs and a MySQL database.

---

## 📌 Features

- 🌍 Monitor environmental safety data
- ➕ Add new records
- 📋 View all records
- 🔍 Search records by ID
- ✏️ Update existing records
- ❌ Delete records
- 🗄️ MySQL database integration
- 🚀 RESTful API architecture
- 📦 Maven project structure

---

## 🛠️ Tech Stack

- **Backend:** Java 17
- **Framework:** Spring Boot
- **Database:** MySQL
- **Build Tool:** Maven
- **ORM:** Spring Data JPA (Hibernate)
- **API Testing:** Postman
- **Version Control:** Git & GitHub
- **Containerization:** Docker
- **CI/CD:** Jenkins
- **Deployment:** Kubernetes (Optional)

---

## 📂 Project Structure

```
EnvironmentSafety
│── src
│   ├── main
│   │   ├── java
│   │   ├── resources
│   │   └── application.properties
│   └── test
│
├── pom.xml
├── Dockerfile
└── README.md
```

---

## ⚙️ Prerequisites

Before running the project, ensure you have installed:

- Java 17+
- Maven
- MySQL Server
- Git
- IntelliJ IDEA / Eclipse
- Postman (Optional)

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/PragatiJayaramRathod/EnvironmentSafety.git
```

### 2. Navigate to the Project

```bash
cd EnvironmentSafety
```

### 3. Configure MySQL

Update the `application.properties` file.

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/environment_safety
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

### 4. Build the Project

```bash
mvn clean install
```

---

### 5. Run the Application

```bash
mvn spring-boot:run
```

or

```bash
Run the main class from your IDE.
```

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/environment` | Add a new record |
| GET | `/api/environment` | Get all records |
| GET | `/api/environment/{id}` | Get record by ID |
| PUT | `/api/environment/{id}` | Update record |
| DELETE | `/api/environment/{id}` | Delete record |

> Update the endpoints if your project uses different mappings.

---

## 🐳 Docker

### Build Docker Image

```bash
docker build -t environmentsafety .
```

### Run Docker Container

```bash
docker run -p 8080:8080 environmentsafety
```

---

## ☸️ Kubernetes Deployment

Deploy using:

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

Check pods:

```bash
kubectl get pods
```

Check services:

```bash
kubectl get svc
```

---

## 🧪 Testing

Use Postman to test all REST APIs.

Example:

```
GET http://localhost:8080/api/environment
```

---

## 📸 Screenshots

You can add screenshots here.

Example:

```
screenshots/
├── home.png
├── postman.png
├── database.png
```

---

## 📈 Future Enhancements

- User Authentication (JWT)
- Role-Based Access Control
- Dashboard with Charts
- Real-time Monitoring
- Email Notifications
- Sensor Integration
- Cloud Deployment (AWS)

---

## 👩‍💻 Author

**Pragati Jayaram Rathod**

GitHub: https://github.com/PragatiJayaramRathod

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you found this project helpful, don't forget to **Star** the repository!
