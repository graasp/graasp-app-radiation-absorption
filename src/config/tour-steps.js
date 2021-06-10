import i18n from './i18n';

const TOUR_STEPS = [
  {
    target: '.side-menu-molecules',
    content: i18n.t('Select a molecule from the side menu'),
    disableBeacon: true,
  },
  {
    target: '.canvas',
    content: i18n.t('Add the selected molecule to an empty area'),
  },
  {
    target: '.animation-controls',
    content: i18n.t(
      'Once all areas contain a molecule, click the play button to start the simulation',
    ),
  },
];

// updateTranslations re-runs i18n.t() on the strings in TOUR_STEPS to update them when e.g. language is changed
// see https://github.com/i18next/react-i18next/issues/1236
const updateTranslations = () => {
  TOUR_STEPS.forEach((step, index) => {
    const translatedStep = i18n.t(step.content);
    TOUR_STEPS[index].content = translatedStep;
  });
};

if (i18n.isInitialized) {
  updateTranslations();
}

i18n.on('languageChanged', () => {
  updateTranslations();
});

export default TOUR_STEPS;
