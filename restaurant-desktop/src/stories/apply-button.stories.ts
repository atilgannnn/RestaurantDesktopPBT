import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApplyButtonComponent } from '../app/components/apply-button/apply-button.component';

export default {
  title: 'Apply Button',
  component: ApplyButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ApplyButtonComponent],
      imports: [HttpClientModule],
    }),
  ],
} as Meta;

const Template: Story<ApplyButtonComponent> = (args: ApplyButtonComponent) => ({
  component: ApplyButtonComponent,
  props: args,
  providers: [HttpClient],
});

export const Default = Template.bind({});
Default.args = {};
