import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "11cfdcaf555401fad6a40bb44ed31f13"

class App extends React.Component {
    gettingWeather = async () => {
        const api_url = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid={API_KEY}&units=metric`);
        const data = await api_url.json();
        console.log(data);
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Info />
                <Form />
                <Weather />
            </div>
        );
    }
}

export default App;