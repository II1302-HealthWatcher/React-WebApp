class MeasurementsModel {
    constructor() {
        this.subscribers = [];
        this.measurementsList = [];
        this.criticalData = [];
    }

    fillMeasurementsList(measurementsList) {
        this.measurementsList = [...measurementsList].reverse();
        this.checkCriticalValues();
        this.notifyObservers();
    }

    getMeasurementsList() {
        return this.measurementsList;
    }

    emptyLocalMeasurementsList() {
        this.measurementsList = [];
        this.emptyCriticalData();
        this.notifyObservers();
    }

    checkCriticalValues() {
        if (this.measurementsList !== []) {
            let title = "Critical Measurment Detected";
            for (let measurementEntry of this.measurementsList) {
                let measurementDate = measurementEntry.MeasurementDate;
                let heartPulse = measurementEntry.HeartPulse;
                let bodyTemperature = measurementEntry.BodyTemperature;
                let bloodOxygenLevel = measurementEntry.BloodOxygenLevel;

                if (heartPulse < 55 || heartPulse > 170) {
                    let criticalMessage = "Critical heart rate measurement was reported at " + measurementDate;
                    this.reportCriticalData(title, criticalMessage);
                    break;
                }

                if (bodyTemperature < 36 || bodyTemperature > 38) {
                    let criticalMessage = "Critical body temperature measurement was reported at " + measurementDate;
                    this.reportCriticalData(title, criticalMessage);
                    break;
                }

                if (bloodOxygenLevel < 95) {
                    let criticalMessage = "Critical blood oxygen level measurement was reported at " + measurementDate;
                    this.reportCriticalData(title, criticalMessage);
                    break;
                }

            }
        }
    }

    reportCriticalData(title, message) {
        this.criticalData = { title: title, message: message };
        this.notifyObservers();
    }


    emptyCriticalData() {
        this.criticalData = null;
        this.notifyObservers();
    }

    addObserver(callback) {
        this.subscribers = this.subscribers.concat(callback);
    }

    removeObserver(obs) {
        this.subscribers = this.subscribers.filter((o) => {
            return o !== obs;
        });
    }

    notifyObservers() {
        this.subscribers.forEach((callback) => {
            try {
                callback();
            } catch (err) {
                console.error("Callback error: ", err, callback);
            }
        });
    }
}

export default MeasurementsModel;
