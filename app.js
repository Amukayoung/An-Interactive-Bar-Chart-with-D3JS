Mocked_Data = [
	{
		id: "001",
		cityName: "Gulu",
		population: "146,000",
	},
	{
		id: "002",
		cityName: "Lira",
		population: "119,000",
	},
	{
		id: "003",
		cityName: "Mbarara",
		population: "97,000",
	},
	{
		id: "004",
		cityName: "Mbale",
		population: "76,000",
	},
	{
		id: "005",
		cityName: "Soroti",
		population: "56,000",
	},
	{
		id: "006",
		cityName: "Fort Portal",
		population: "42,000",
	},
	{
		id: "007",
		cityName: "Masaka",
		population: "65,000",
	},
	{
		id: "008",
		cityName: "Jinja",
		population: "93,000",
	},
];

const ChartWidth = 750;
const ChartHeight = 450;

const chartContainer = d3
	.select("svg")
	.attr("width", ChartWidth)
	.attr("height", ChartHeight);

const chart = chartContainer
	.append("g")
	.selectAll(".bar")
	.data(Mocked_Data)
	.enter()
	.append("rect")
	.classed("bar", true)
	.attr("width")
	.attr("height");
