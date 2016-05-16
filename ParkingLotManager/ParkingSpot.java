package ParkingLotManager;

import java.util.Date;

public class ParkingSpot {
    
    private String registration;
    public Date startTime;

    public ParkingSpot(String registration, Date startTime) {
        this.registration = registration;
        this.startTime = startTime;
    }

    public String getRegistration() {
        return registration;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setRegistration(String registration) {
        this.registration = registration;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    @Override
    public String toString() {
        return "ParkingSpot{" + "registration=" + registration + ", startTime=" + startTime + '}';
    }
    
}
