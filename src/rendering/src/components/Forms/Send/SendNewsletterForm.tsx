import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { useEffect} from 'react'
import Script from 'next/script'

type SendNewsletterFormProps = ComponentProps & {
  fields: {
    formCode: Field<string>;
  };
};

const SendNewsletterForm = (props: SendNewsletterFormProps): JSX.Element => {

  useEffect(() => {
    //setData(props.fields.formCode.value); 
  }, []);

  if(props.fields.formCode.value) {
    return (
      <>
        {
          <Script dangerouslySetInnerHTML={{ __html: `if(!window.mootrack){ !function(t,n,e,o,a){function d(t){var n=~~(Date.now()/3e5),o=document.createElement(e);o.async=!0,o.src=t+"?ts="+n;var a=document.getElementsByTagName(e)[0];a.parentNode.insertBefore(o,a)}t.MooTrackerObject=a,t[a]=t[a]||function(){return t[a].q?void t[a].q.push(arguments):void(t[a].q=[arguments])},window.attachEvent?window.attachEvent("onload",d.bind(this,o)):window.addEventListener("load",d.bind(this,o),!1)}(window,document,"script","https://cdn.stat-track.com/statics/moosend-tracking.min.js","mootrack"); } console.log('load form-1');mootrack('loadForm', '${ props.fields.formCode.value }');`}}></Script>
        }
      </>
    );
  }

  return <></>;
};

export const Default = withDatasourceCheck()<SendNewsletterFormProps>(SendNewsletterForm);
