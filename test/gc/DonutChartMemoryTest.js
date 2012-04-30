var DonutChartMemoryTest = TestCase("DonutChartMemoryTest");

DonutChartMemoryTest.prototype = new ChartMemoryTest();

DonutChartMemoryTest.prototype.testSetData = function () {
	// Disabled until issue #542 is fixed.
}

/**
 * Returns the configuration for the charts that we test.
 */
DonutChartMemoryTest.prototype.getConfig = function () {
	return {
		chart: {
			type: 'donut'
		},

		series: [{
			data: this.randomData(5)
		}]
	};
};

DonutChartMemoryTest.prototype.testAddRemovePlotBands = function () {
	// Do not run this test in Pie charts.
}