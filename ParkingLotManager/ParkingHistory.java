package ParkingLotManager;

import java.util.Date;

public class ParkingHistory {
    
    private String registration;
    private Date startTime;
    private Date endTime;
    private double price;

    public ParkingHistory(String registration, Date startTime, Date endTime, double price) {
        this.registration = registration;
        this.startTime = startTime;
        this.endTime = endTime;
        this.price = price;
    }

    public String getRegistration() {
        return registration;
    }

    public Date getStartTime() {
        return startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public double getPrice() {
        return price;
    }

    public void setRegistration(String registration) {
        this.registration = registration;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "ParkingHistory{" + "registration=" + registration + ", startTime=" + startTime + ", endTime=" + endTime + ", price=" + price + '}';
    }
    
    
}
