function Progress({ step }) {
  return (
    <p className="progress">
      0{step + 1}
      <span>/03</span>
    </p>
  );
}

export default Progress;