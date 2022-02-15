import CarsItem from './CarsItem';

const Cars = () => {
  return (
    <div className="-mt-12">
      <CarsItem
        model="Model 3"
        disc="Order Online for"
        link="Touchless Delivery"
        buttonOne="Custom Order"
        buttonTwo="existing inventory"
        pic="/image/Model3.jpg"
      />
      <CarsItem
        model="Model Y"
        disc="Order Online for"
        link="Touchless Delivery"
        buttonOne="Custom Order"
        buttonTwo="existing inventory"
        pic="/image/ModelY.jpg"
      />
      <CarsItem
        model="Model S"
        disc="Order Online for"
        link="Touchless Delivery"
        buttonOne="Custom Order"
        buttonTwo="existing inventory"
        pic="/image/ModelS.jpg"
      />
      <CarsItem
        model="Model X"
        disc="Order Online for"
        link="Touchless Delivery"
        buttonOne="Custom Order"
        buttonTwo="existing inventory"
        pic="/image/ModelX.jpg"
      />
      <CarsItem
        model="Solar Panels"
        disc="Order Online for"
        link="Touchless Delivery"
        buttonOne="Custom Order"
        buttonTwo="Learn more"
        pic="/image/SolarPanels.jpg"
      />
      <CarsItem
        model="Solar Roof"
        disc="Order Online for"
        link="Touchless Delivery"
        buttonOne="Custom Order"
        buttonTwo="Learn more"
        pic="/image/SolarRoof.jpg"
      />
      <CarsItem
        model="Accessories"
        disc="Order Online for"
        link="Touchless Delivery"
        buttonOne="Custom Order"
        buttonTwo="Learn more"
        pic="/image/Accessories.jpg"
      />
    </div>
  );
};

export default Cars;
