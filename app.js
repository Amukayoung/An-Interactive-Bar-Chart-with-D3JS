Mocked_Data = [
	{
		id: "001",
		cityName: "Gulu",
		population: 146,
	},
	{
		id: "002",
		cityName: "Lira",
		population: 119,
	},
	{
		id: "003",
		cityName: "Mbarara",
		population: 97,
	},
	{
		id: "004",
		cityName: "Mbale",
		population: 76,
	},
	{
		id: "005",
		cityName: "Soroti",
		population: 56,
	},
	{
		id: "006",
		cityName: "Fort Portal",
		population: 42,
	},
	{
		id: "007",
		cityName: "Masaka",
		population: 65,
	},
	{
		id: "008",
		cityName: "Jinja",
		population: 93,
	},
];

const ChartWidth = 650;
const ChartHeight = 450;

const x = d3.scaleBand().rangeRound([0, ChartWidth]).padding(0.2);
const y = d3
	.scaleLinear()

	.range([ChartHeight, 0]);

const chartContainer = d3
	.select("svg")
	.attr("width", ChartWidth)
	.attr("height", ChartHeight);
x.domain(Mocked_Data.map((data) => data.cityName));
y.domain([0, d3.max(Mocked_Data, (data) => data.population) + 10]);

chartContainer.append("g").call(d3.axisBottom(x)).attr("color", "#4f009e");

const chart = chartContainer
	.append("g")
	.selectAll(".bar")
	.data(Mocked_Data)
	.enter()
	.append("rect")
	.classed("bar", true)
	.attr("width", x.bandwidth())
	.attr("height", (data) => ChartHeight - y(data.population))
	.attr("x", (data) => x(data.cityName))
	.attr("y", (data) => y(data.population));

chartContainer
	.selectAll(".label")
	.data(Mocked_Data)
	.enter()
	.append("text")
	.text((data) => data.population)
	.attr("x", (data) => x(data.cityName) + x.bandwidth() / 2)
	.attr("y", (data) => y(data.population) - 20)
	.attr("text-anchor", "middle")
	.classed("label", true);
