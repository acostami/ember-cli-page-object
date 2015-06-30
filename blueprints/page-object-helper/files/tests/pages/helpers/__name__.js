import PageObject from '../../page-object';

function checked(selector /*, options */) {
  return $(selector).prop('checked');
}

export default PageObject.customHelper(checked);
