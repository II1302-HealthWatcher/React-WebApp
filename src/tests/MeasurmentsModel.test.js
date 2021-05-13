import MeasurementsModel from '../js/MeasurementsModel'

test('fills the measurements list correctly', () => {
    let measurementsModel = new MeasurementsModel();
    let testList = [1, 2, 3];
    measurementsModel.fillMeasurementsList(testList);
    let measurementsList = measurementsModel.getMeasurementsList();
    let reversedList = testList.reverse();
    expect(measurementsList).toStrictEqual(reversedList);
});

test('empties the measurements list correctly', () => {
    let measurementsModel = new MeasurementsModel();
    let testList = [1, 2, 3];
    measurementsModel.fillMeasurementsList(testList);
    measurementsModel.emptyLocalMeasurementsList();
    let measurementsList = measurementsModel.getMeasurementsList();
    let emptyList = [];
    expect(measurementsList).toStrictEqual(emptyList);
});

test('notifies the measurements model observers correctly', () => {
    let measurementsModel = new MeasurementsModel();
    let observerTest = 0;
    measurementsModel.addObserver(() => { observerTest = 1 });
    measurementsModel.notifyObservers();
    let expectedTestValue = 1;
    expect(observerTest).toStrictEqual(expectedTestValue);
});
