<?php
/**
* @package		Direct Alias
* @copyright	Copyright (C) 2009-2013 AlterBrains.com. All rights reserved.
* @license		http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
*/

defined('_JEXEC') or die('Restricted access'); 

class plgSystemDirectalias extends JPlugin
{
	public function onContentPrepareForm($form, $data)
	{
		if (!($form instanceof JForm)) {
			$this->_subject->setError('JERROR_NOT_A_FORM');
			return false;
		}
		
		if ($form->getName() != 'com_menus.item') {
			return true;
		}
		
		$this->loadLanguage();
		
		JForm::addFieldPath(__DIR__);
		$form->setFieldAttribute('alias', 'type', 'directaliasfield');

		$form->load('<?xml version="1.0" encoding="utf-8"?>
			<form>
				<fields name="params">
					<fieldset name="menu-options">
						<field name="direct_alias" type="hidden" />
					</fieldset>
				</fields>
			</form>', false);
	}
	
	public function onAfterInitialise()
	{
		$app = JFactory::getApplication();
		
		if ($app->isAdmin()) {
			return;
		}
		
		$menu = $app->getMenu();
		
		// I hate Joomla sometimes... smbd is crazy on privates
		$rProperty = new ReflectionProperty($menu, '_items');
		$rProperty->setAccessible(true);
		$items = $rProperty->getValue($menu);
			
		foreach($items as &$item) {
			if ($item->params->get('direct_alias')) {
				$item->route = $item->alias;
				
				// Process children
				foreach($items as &$item2) {
					if ($item2->id != $item->id && in_array($item->id, $item2->tree) && !$item2->params->get('direct_alias')) {
						$item2->route = $item->route . '/' . $item2->alias;
					}
				}
			}
		}
	}
}
