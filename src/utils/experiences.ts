import { Experience } from '@/types';

export const groupExperiencesByDate = (experiences: Experience[]) => {
  experiences.sort((a, b) => {
    const initDateA = new Date(parseInt(a.dateInit.split('-')[0]), parseInt(a.dateInit.split('-')[1]) - 1);
    const initDateB = new Date(parseInt(b.dateInit.split('-')[0]), parseInt(b.dateInit.split('-')[1]) - 1);

    return initDateA.getTime() - initDateB.getTime();
  })

  experiences.forEach((current, index) => {
    let level = 0;
    for (let i = 0; i < index; i++) {
      if (isContained(current, experiences[i])) {
        level++;
      }
    }
    current.level = level;
  });

  experiences.sort((a, b) => {
    const endDateA = a.dateEnd ? new Date(parseInt(a.dateEnd.split('-')[0]), parseInt(a.dateEnd.split('-')[1]) - 1) : new Date();
    const endDateB = b.dateEnd ? new Date(parseInt(b.dateEnd.split('-')[0]), parseInt(b.dateEnd.split('-')[1]) - 1) : new Date();

    return endDateB.getTime() - endDateA.getTime();
  })

  return experiences
};

const isContained = (inner: Experience, outer: Experience) => {
  const innerStart = new Date(inner.dateInit);
  const innerEnd = inner.dateEnd ? new Date(inner.dateEnd) : new Date();
  const outerStart = new Date(outer.dateInit);
  const outerEnd = outer.dateEnd ? new Date(outer.dateEnd) : new Date();

  return (innerStart >= outerStart && innerEnd <= outerEnd);
}