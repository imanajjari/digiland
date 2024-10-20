import { useCallback, useEffect, useState } from "react";
import { FiRefreshCw } from "react-icons/fi";

function Updatedcomponent(Originalcomponent) {
  function Newcomponent() {
    const [scrolltop, setScrolltop] = useState("");
    const [refreshrandomnumber] = useState(<FiRefreshCw />);
    const [firstname, setfirstname] = useState("");
    const [savefirstname, setsavefirstname] = useState(null);
    const [lastname, setlastname] = useState("");
    const [savelastname, setsavelastname] = useState(null);
    const [firstrandomnumber, setfirstrandomnumber] = useState("");
    const [secondrandomnumber, setsecondrandomnumber] = useState("");
    const [answer, setanswer] = useState("");
    const generaterandomnumber = useCallback(() => {
      setfirstrandomnumber(Math.floor(Math.random() * 100 + 7));
      setsecondrandomnumber(Math.floor(Math.random() * 100));
    }, []);
    const result = firstrandomnumber + secondrandomnumber;
    const indicator = () => {
      const winscroll = document.documentElement.scrollTop;
      const heigh =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winscroll / heigh) * 100;
      setScrolltop(scrolled);
    };
    const handleranswer = (e) => {
      setanswer(e.target.value);
    };
    const handlerfirstname = (e) => {
      setfirstname(e.target.value);
    };
    const handlerlastname = (e) => {
      setlastname(e.target.value);
    };
    const submit = () => {
      if (answer == result) {
        setsavefirstname(firstname);
        setsavelastname(lastname);
        setfirstname("");
        setlastname("");
        setanswer("");
        generaterandomnumber();
      } else {
        alert("SORRY");
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", indicator);
      return () => window.removeEventListener("scroll", indicator);
    }, []);

    useEffect(() => {
      generaterandomnumber();
    }, []);

    return (
      <Originalcomponent
        firstname={firstname}
        savefirstname={savefirstname}
        lastname={lastname}
        savelastname={savelastname}
        handlerfirstname={handlerfirstname}
        handlerlastname={handlerlastname}
        handleranswer={handleranswer}
        firstrandomnumber={firstrandomnumber}
        secondrandomnumber={secondrandomnumber}
        refreshrandomnumber={refreshrandomnumber}
        generaterandomnumber={generaterandomnumber}
        submit={submit}
        result={result}
        answer={answer}
        scrolltop={scrolltop}
      />
    );
  }
  return Newcomponent;
}

export default Updatedcomponent;
