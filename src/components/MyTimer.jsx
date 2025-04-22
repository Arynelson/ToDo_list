
import { useTimer } from 'react-timer-hook';
import PropTypes from 'prop-types'; // ← Importe o PropTypes aqui

const MyTimer = ({ expiryTimestamp }) => {
  const {
    seconds,
    minutes,
    start,
    pause,
    restart,
  } = useTimer({ expiryTimestamp, autoStart: false });

  return (
    <div className="flex items-center gap-3 justify-center h-[100px] bg-slate-600 text-slate-100">
      <h1 className="text-3xl  text-slate-100 font-bold text-center">{minutes}:{seconds.toString().padStart(2, '0')}</h1>
      <button onClick={start} className="bg-orange-500 text-slate-100 px-2 py-2 p-2 rounded-md hover:bg-slate-400 w-full">Iniciar</button>
      <button onClick={pause} className="bg-orange-500 text-slate-100 px-2 py-2 p-2 rounded-md hover:bg-slate-400 w-full" >Pausar</button>
      <button onClick={() => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + 1800); // 30 min
        restart(time);
      }}className="bg-orange-500 text-slate-100 px-2 py-2 p-2 rounded-md hover:bg-slate-400 w-full" >Resetar</button>
    </div>
  );
};

MyTimer.propTypes = {
  expiryTimestamp: PropTypes.instanceOf(Date).isRequired,
};

export default MyTimer;
