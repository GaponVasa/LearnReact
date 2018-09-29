export const calculate = (measure, selectValue, value)=>{
	const booleanValue = (value !== '' && selectValue !== '');

	if(booleanValue && measure === 'milimeter'){
		if(selectValue === '1'){
			return value;
		}else if(selectValue === '2'){
			return (value * 10);
		}else if(selectValue === '3'){
			return (value * 100);
		}else if(selectValue === '4'){
			return (value * 1000);
		};
	}else if(booleanValue && measure === 'centimeter'){
		if(selectValue === '1'){
			return (value / 10);
		}else if(selectValue === '2'){
			return value;
		}else if(selectValue === '3'){
			return (value * 10);
		}else if(selectValue === '4'){
			return (value * 100);
		};
	}else if(booleanValue && measure === 'decimeter'){
		if(selectValue === '1'){
			return (value / 100);
		}else if(selectValue === '2'){
			return (value / 10);
		}else if(selectValue === '3'){
			return value;
		}else if(selectValue === '4'){
			return (value * 10);
		};
	}else if(booleanValue && measure === 'meter'){
		if(selectValue === '1'){
			return (value / 1000);
		}else if(selectValue === '2'){
			return (value / 100);
		}else if(selectValue === '3'){
			return (value / 10);
		}else if(selectValue === '4'){
			return value;
		};
	};
};