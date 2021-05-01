class MeasurementsModel {
    constructor() {
        this.subscribers = [];
        this.measurementsList = [];
    }

    fillMeasurementsList(measurementsList) {
        this.measurementsList = [...measurementsList].reverse();
        this.notifyObservers();
    }

    getMeasurementsList() {
        return this.measurementsList;
    }

    emptyLocalMeasurementsList() {
        this.measurementsList = [];
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
