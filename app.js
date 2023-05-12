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
const Margins = {
	top: 20,
	bottom: 10,
};
const ChartWidth = 650;
const ChartHeight = 500 - Margins.top - Margins.bottom;

let selectedData = Mocked_Data;

const x = d3.scaleBand().rangeRound([0, ChartWidth]).padding(0.2);
const y = d3
	.scaleLinear()

	.range([ChartHeight, 0]);

const chartContainer = d3
	.select("svg")
	.attr("width", ChartWidth)
	.attr("height", ChartHeight + Margins.top);
x.domain(Mocked_Data.map((data) => data.cityName));
y.domain([0, d3.max(Mocked_Data, (data) => data.population) + 10]);

chartContainer
	.append("g")
	.call(d3.axisBottom(x))
	.attr("transform", `translate(0,${ChartHeight})`)
	.attr("color", "green")
	.attr("font-size", "16px");
let unselectedIds = [];
function renderCharts() {
	const chart = chartContainer
		.selectAll(".bar")
		.data(selectedData, (data) => data.id)
		.enter()
		.append("rect")
		.attr("id", (data) => data.id)
		.classed("bar", true)
		.attr("width", x.bandwidth())
		.attr("height", (data) => ChartHeight - y(data.population))
		.attr("x", (data) => x(data.cityName))
		.attr("y", (data) => y(data.population));
	chartContainer
		.selectAll(".bar")
		.data(selectedData, (data) => data.id)
		.exit()
		.remove();

	chartContainer
		.selectAll(".label")
		.data(selectedData, (data) => data.id)
		.enter()
		.append("text")
		.text((data) => `${data.population}000`)
		.attr("x", (data) => x(data.cityName) + x.bandwidth() / 2)
		.attr("y", (data) => y(data.population) - 15)
		.attr("text-anchor", "middle")
		.classed("label", true);
	chartContainer
		.selectAll(".label")
		.data(selectedData, (data) => data.id)
		.exit()
		.remove();
}
renderCharts();

const listItems = d3
	.select("#data")
	.select("ul")
	.selectAll("li")
	.data(Mocked_Data)
	.enter()
	.append("li");

listItems.append("span").text((data) => data.cityName);

listItems
	.append("input")
	.attr("type", "checkbox")
	.attr("checked", true)
	.attr("background-color", "green")
	.on("change", (event, data) => {
		if (unselectedIds.indexOf(data.id) === -1) {
			unselectedIds.push(data.id);
		} else {
			unselectedIds = unselectedIds.filter((id) => id !== data.id);
		}
		selectedData = Mocked_Data.filter(
			(data) => unselectedIds.indexOf(data.id) === -1
		);
		renderCharts();
	});
