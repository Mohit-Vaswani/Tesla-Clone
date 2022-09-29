// Tesla Home Page
import TeslaHeader from './Components/TeslaHeader';
import TeslaSection from './Components/TeslaSection';

function App(){
    return(
        <>
        <TeslaHeader/>
        <TeslaSection 
        Model="Model-3" 
        para="order online for touchless delivery"
        LButton="Custom Order" 
        RButton="Existing Inventory"
        bgImage="model-s.jpg"
        />
        <TeslaSection 
        Model="Model-Y" 
        para="order online for touchless delivery"
        LButton="Custom Order" 
        RButton="Existing Inventory"
        bgImage="model-y.jpg"
        />
        <TeslaSection 
        Model="Model-S" 
        para="order online for touchless delivery"
        LButton="Custom Order" 
        RButton="Existing Inventory"
        bgImage="model-3.jpg"
        />
        <TeslaSection 
        Model="Model-X" 
        para="order online for touchless delivery"
        LButton="Custom Order" 
        RButton="Existing Inventory"
        bgImage="model-x.jpg"
        />
        <TeslaSection 
        Model="Solar Panels" 
        para="Lowest Cost Solar Panels in America"
        LButton="Order Now" 
        RButton="Learn More"
        bgImage="solar-panel.jpg"
        />
        <TeslaSection 
        Model="Solar Roof" 
        para="Produce Clean Energy From Your Roof"
        LButton="Order Now" 
        RButton="Learn More"
        bgImage="solar-roof.jpg"
        />
        </>
    )
}

export default App;