package ParkingLotManager;

public class Car {
    
    private String registration;
    private String Brand;
    private String Model;    

    public Car(String registration, String Brand, String Model) {
        this.registration = registration;
        this.Brand = Brand;
        this.Model = Model;
    }

    public String getRegistration() {
        return registration;
    }

    public String getBrand() {
        return Brand;
    }

    public String getModel() {
        return Model;
    }

    public void setRegistration(String registration) {
        this.registration = registration;
    }

    public void setBrand(String Brand) {
        this.Brand = Brand;
    }

    public void setModel(String Model) {
        this.Model = Model;
    }

    @Override
    public String toString() {
        return "Car{" + "registration=" + registration + ", Brand=" + Brand + ", Model=" + Model + '}';
    }
}


