Mocked_Data = [
	{
		id: "001",
		cityName: "Gulu",
		population: 146000,
	},
	{
		id: "002",
		cityName: "Lira",
		population: 119000,
	},
	{
		id: "003",
		cityName: "Mbarara",
		population: 97000,
	},
	{
		id: "004",
		cityName: "Mbale",
		population: 76000,
	},
	{
		id: "005",
		cityName: "Soroti",
		population: 56000,
	},
	{
		id: "006",
		cityName: "Fort Portal",
		population: 42000,
	},
	{
		id: "007",
		cityName: "Masaka",
		population: 65000,
	},
	{
		id: "008",
		cityName: "Jinja",
		population: 93000,
	},
];

const ChartWidth = 750;
const ChartHeight = 450;

const xAxisScale = d3.scaleBand().rangeRound([0, ChartWidth]).padding(0.2);
const yAxisScale = d3.scaleLinear.range([ChartHeight, 0]);

const chartContainer = d3
	.select("svg")
	.attr("width", ChartWidth)
	.attr("height", ChartHeight);

xAxisScale.domain(Mocked_Data.map((data) => data.cityName));
yAxisScale.domain([0, d3.max(Mocked_Data, (data) => data.population) + 10000]);

const chart = chartContainer
	.append("g")
	.selectAll(".bar")
	.data(Mocked_Data)
	.enter()
	.append("rect")
	.classed("bar", true)
	.attr("width")
	.attr("height");
