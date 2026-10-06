function WeatherAdvice() {
  const isRainy = true;

  return (
    <section className="weather-advice">
      <h2>Совет по погоде</h2>

      <p>
        {isRainy
          ? "Возьмите зонт: сегодня возможен дождь."
          : "Зонт не понадобится: погода хорошая."}
      </p>
    </section>
  );
}

export default WeatherAdvice;