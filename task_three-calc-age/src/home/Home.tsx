/* 
  this was made by abobkr ali 
  i did using typescript and some hooks 
  it calc age 
*/
import { useRef, useState } from "react";
import { IoMdArrowDown } from "react-icons/io";
const Home = () => {
  // input refs
  const yearInput = useRef<HTMLInputElement>(null);
  const monthInput = useRef<HTMLInputElement>(null);
  const dayInput = useRef<HTMLInputElement>(null);

  // data that will be shown to the user
  const [years, setYears] = useState<number | null>(null);
  const [months, setMonths] = useState<number | null>(null);
  const [days, setDays] = useState<number | null>(null);

  // paragraph that will be displayed to user for  validation
  const [yearsValidation, setYearsValidation] = useState("");
  const [monthsValidation, setmonthsValidation] = useState("");
  const [daysValidation, setDaysValidation] = useState("");

  /*
  calculating age function
  it's used in handleClick function 
  */
  const calculateAge = (
    // user birthday
    birthDay: number,
    birthMonth: number,
    birthYear: number
  ): {
    years: number;
    months: number;
    days: number;
  } => {
    // Get current date
    const currentDate = new Date();

    // Calculate the difference in years, months, and days
    let ageYears = currentDate.getFullYear() - birthYear;
    let ageMonths = currentDate.getMonth() - (birthMonth - 1);
    let ageDays = currentDate.getDate() - birthDay;

    // validation
    if (!birthDay || !birthMonth || !birthYear) {
      if (!birthDay) {
        setDaysValidation("it's required");
      } else {
        setDaysValidation("");
      }
      if (!birthMonth) {
        setmonthsValidation("it's required");
      } else {
        setmonthsValidation("");
      }
      if (!birthYear) {
        setYearsValidation("it's required");
      } else {
        setYearsValidation("");
      }
    } else if (
      birthYear > currentDate.getFullYear() ||
      birthDay > 31 ||
      birthDay < 0 ||
      birthMonth > 12 ||
      birthMonth < 0
    ) {
      if (birthYear > currentDate.getFullYear()) {
        setYearsValidation("enter a valid year");
      }
      if (birthDay > 31 || birthDay < 0) {
        setDaysValidation("enter a valid day");
      }
      if (birthMonth > 12 || birthMonth < 0) {
        setmonthsValidation("enter a valid month");
      }
    } else {
      // calculate the age and display it and remove validation text
      setmonthsValidation("");
      setDaysValidation("");
      setYearsValidation("");
      if (ageDays < 0) {
        ageMonths -= 1;
        const lastMonthDays = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          0
        ).getDate();
        ageDays += lastMonthDays;
      }

      if (ageMonths < 0) {
        ageYears -= 1;
        ageMonths += 12;
      }
      console.log(ageYears, ageMonths, ageDays);

      return {
        years: ageYears || 0,
        months: ageMonths || 0,
        days: ageDays || 0,
      };
    }

    // Adjust for negative months or days
  };

  //
  const handleClick = () => {
    let day: number = 0;
    let month: number = 0;
    let year: number = 0;
    if (dayInput.current) {
      day = parseInt(dayInput.current.value, 10);
    }
    if (monthInput.current) {
      month = parseInt(monthInput.current.value, 10);
    }
    if (yearInput.current) {
      year = parseInt(yearInput.current.value, 10);
    }

    const age = calculateAge(day, month, year);
    console.log(age);

    setYears(age.years);
    setMonths(age.months);
    setDays(age.days);
  };

  return (
    <div className="w-[50%] h-[75%] right rounded-xl rounded-12-rem  bg-white rounded-br-3xl text-black ">
      <div className="flex p-8 gap-4 mb-12">
        {/* day */}
        <div>
          <p className="text-lg font-bold text-slate-400">Day</p>
          <input
            ref={dayInput}
            placeholder="DD"
            type="text"
            className="h-12 w-36 border-solid border  text-2xl p-8 font-bold border-black rounded"
          />
          <p className="text-sm text-red-900 mt-2 italic">
            {daysValidation && daysValidation}
          </p>
        </div>

        {/* month */}
        <div>
          <p className="text-lg font-bold text-slate-400">Month</p>
          <input
            ref={monthInput}
            placeholder="MM"
            type="text"
            className="h-12 w-36 border-solid border  text-2xl p-8 font-bold border-black rounded"
          />
          <p className="text-sm mt-2 text-red-900 italic">
            {monthsValidation && monthsValidation}
          </p>
        </div>

        {/* year */}
        <div>
          <p className="text-lg font-bold text-slate-400">Year</p>
          <input
            ref={yearInput}
            placeholder="YY"
            type="text"
            className="h-12 w-36 border-solid border  text-2xl p-8 font-bold border-black rounded"
          />
          <p className="text-sm mt-2 text-red-900 italic">
            {" "}
            {yearsValidation && yearsValidation}
          </p>
        </div>
      </div>
      <div className="w-[80%] m-auto h-20 flx justify-center items-center relative">
        <span className="hr bg-slate-500 h-1 w-[80%]"></span>
        <span
          onClick={handleClick}
          className="rounded-full absolute r-0 w-20 h-20 bg-purple-600 flex justify-center items-center right-0 text-white "
        >
          <IoMdArrowDown className="text-3xl" />
        </span>
      </div>
      <div className="text-6xl italic font-bold pl-16">
        <h1 className="">
          <span className="text-purple-600">{years ? years : "--"}</span> Years
        </h1>
        <h1>
          <span className="text-purple-600">{months ? months : "--"}</span>{" "}
          Months
        </h1>
        <h1>
          <span className="text-purple-600">{days ? days : "--"}</span> Days
        </h1>
      </div>
    </div>
  );
};

export default Home;
