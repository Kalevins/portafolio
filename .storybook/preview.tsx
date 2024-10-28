import React, { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';

import { LoadingScreen } from '../src/components';
import { MenuProvider } from '../src/contexts';
import "@/styles/globals.css";
import i18n from "../src/utils/i18n";

export const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

const withI18next = (Story, context) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    // This catches the suspense from components not yet ready (still loading translations)
    // Alternative: set useSuspense to false on i18next.options.react when initializing i18next
    <Suspense fallback={<LoadingScreen />}>
      <I18nextProvider i18n={i18n}>
        <MenuProvider>
          <Story />
        </MenuProvider>
      </I18nextProvider>
    </Suspense>
  );
};

// export decorators for storybook to wrap your stories in
export const decorators = [withI18next];

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'es', title: 'Español' },
      ],
      showName: true,
    },
  },
};

export default preview;