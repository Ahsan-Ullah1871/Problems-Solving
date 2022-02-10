// Test Data
// const data = [
// 	{
// 		name: "Mr Ahsan",
// 		birthYear: 2001,
// 		currentYear: 2022,
// 		district: "Rangpur",
// 		postNo: 1200,
// 		priority: 2,
// 	},
// 	{
// 		name: "Mr Abir",
// 		birthYear: 1998,
// 		currentYear: 2022,
// 		district: "Dhaka",
// 		postNo: 1300,
// 		priority: 1,
// 	},
// ];

// Gif Distribution function:
const cardDistribution = (data) => {
	const user_gifts = data.map((item, index) => {
		const district_name = item.district.slice(0, 2).toUpperCase();
		const current_year = item.currentYear.toString().slice(-2);
		const post_no = item.postNo.toString().slice(0, 2);
		const birth_date = item.birthYear.toString();
		const digit = String(index + 1).padStart(6, "0");
		const gift =
			Number(digit.toString().slice(-1)) % 2 == 0 ? "R" : "W";

		return {
			cardNumber: `${
				district_name +
				current_year +
				post_no +
				birth_date +
				digit
			}`,
			gift: gift,
			priority: item.priority,
		};
    });
     return user_gifts.sort(function (x, y) {
		return x.priority - y.priority;
     });
};


// test
// console.log(cardDistribution(data));
