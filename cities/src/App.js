import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "11cfdcaf555401fad6a40bb44ed31f13"

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: undefined
    }

    gettingWeather = async (e) => {
        e.PreventDefault();
        const city = e.target.elements.city.value;
        
    if(city) {
        const api_url = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API_KEY}&units=metric`);
        const data = await api_url.json();

        var sunset = data.sys.sunset;
        vat date = new Date();
        date.setTime(sunset);
        var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

        this.setState({
            temp: data.maim.temp,
            city: data.name,
            country: data.sys.country,
            pressure: data.maim.pressure,
            sunset: sunset_date,
            error: ""
        });
    }
}


    render() {
        return (
            <div>
                <Info />
                <Form weatherMethod={this.gettingWeather} />
                <Weather 
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    pressure={this.main.pressure}
                    sunset={this.state.sunset}
                    error={this.state.error}
                />
            </div>
        );
    }
}

export default App;