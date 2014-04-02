<?php
/**
* @package		Direct Alias
* @copyright	Copyright (C) 2009-2013 AlterBrains.com. All rights reserved.
* @license		http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
*/

defined('_JEXEC') or die('Restricted access'); 

class JFormFieldDirectaliasfield extends JFormFieldText
{
	public $type = 'Directaliasfield';

	protected function getInput()
	{
		$direct = $this->form->getValue('direct_alias', 'params', false);
		$html 	= array();

		JFactory::getDocument()->addScriptDeclaration('
			function toggleDirectAlias(button) {
				var direct = document.getElementById("jform_params_direct_alias");
				button.value = (direct.value > 0) ? "'.JText::_('PLG_SYSTEM_DIRECT_ALIAS_RELATIVE').'" : "'.JText::_('PLG_SYSTEM_DIRECT_ALIAS_DIRECT').'";
				direct.value = 1 - direct.value;
			}
		');
		
		$version = new JVersion();
		
		if ($version->RELEASE < 3) {
			$html[] = parent::getInput();
			$html[] = '<input type="button" onclick="toggleDirectAlias(this)" value="' . JText::_($direct ? 'PLG_SYSTEM_DIRECT_ALIAS_DIRECT' : 'PLG_SYSTEM_DIRECT_ALIAS_RELATIVE') . '" class="button hasTip" title="' . JText::_('PLG_SYSTEM_DIRECT_ALIAS_DIRECT_TIP') . '" style="cursor:pointer" />';
		}
		else {
			$html[] = '<div class="input-append">';
			$html[] = parent::getInput();
			$html[] = '<input type="button" onclick="toggleDirectAlias(this)" value="' . JText::_($direct ? 'PLG_SYSTEM_DIRECT_ALIAS_DIRECT' : 'PLG_SYSTEM_DIRECT_ALIAS_RELATIVE') . '" class="btn hasTooltip" title="' . JText::_('PLG_SYSTEM_DIRECT_ALIAS_DIRECT_TIP') . '" style="cursor:pointer" />';
			$html[] = '</div>';
		}

		return implode("\n", $html);
	}
}
