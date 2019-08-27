/* 
  calculate a position based on time 
*/
export function CalculatePosition(fullHeight: number, time: Date): number {
  if (time == null) return 0;
  if (fullHeight === 0) return 0;

  let hour = time.getHours();
  let minutes = time.getMinutes();

  // calculate parts
  let hourHeight = fullHeight / 24;
  let minutesHeight = hourHeight / 60;

  let finalHeight = 0;

  finalHeight = finalHeight + hourHeight * hour;
  finalHeight = finalHeight + minutesHeight * minutes;

  return finalHeight;
}
