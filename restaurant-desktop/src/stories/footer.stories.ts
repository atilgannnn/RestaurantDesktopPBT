import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { FooterComponent } from '../app/components/footer/footer.component';

export default {
  title: 'Footer',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      declarations: [FooterComponent],
    }),
  ],
} as Meta;

const Template: Story<FooterComponent> = (args: FooterComponent) => ({
  component: FooterComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
