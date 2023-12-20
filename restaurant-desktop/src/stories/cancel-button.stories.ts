import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CancelButtonComponent } from '../app/components/cancel-button/cancel-button.component';

export default {
  title: 'Cancel Button',
  component: CancelButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [CancelButtonComponent],
    }),
  ],
} as Meta;

const Template: Story<CancelButtonComponent> = (
  args: CancelButtonComponent
) => ({
  component: CancelButtonComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
