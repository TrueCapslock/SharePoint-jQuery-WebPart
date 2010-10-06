/**
 * Created by IntelliJ IDEA.
 * User: ole
 * Date: Oct 6, 2010
 * Time: 9:47:55 PM
 * To change this template use File | Settings | File Templates.
 */

// Determines if the web part page is in design mode
// by looking at hidden fields produced by SharePoint

function IsInDesignMode()
{
    if(document.getElementById("MSOLayout_InDesignMode").value == '1')
    return true;

    if(document.getElementById("MSOTlPn_SelectedWpId").value != "")
    return true;

    return false;
}

function kickStart() {
    $(":input[title='Batch Status']").attr('disabled', true);
    $(":input[title='Report Type']").attr('disabled', true);
}

if (IsInDesignMode() != true) {
    _spBodyOnLoadFunctionNames.push("kickStart");
}