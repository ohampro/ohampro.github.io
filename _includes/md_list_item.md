
{% assign itemValue = include.item %}
{% assign normal = '' %}
{% assign bold = '' %}

{% assign titleDesc = itemValue | split: ': ' %}
{% if titleDesc.size == 2 %}
    {% assign normal = titleDesc[0] %}
    {% assign bold = '**' | append: normal | append: '**: ' %}
    {% assign itemValue = titleDesc[1] %}

{% elsif include.bold %}
    {% assign normal = itemValue %}
    {% assign itemValue = '**' | append: normal | append: '**' %}

{% endif %}

{% assign ihref = nil %}
{% if itemValue contains '@href=' %}
    {% assign ihref = itemValue | split: '@href=' | last | split: " " | first %}
    {% assign hrefString = '@href=' | append: ihref %}
    {% assign itemValue = itemValue | replace: hrefString, '' %}
{% endif %}

{% if include.header %}
{{ include.indent }}- {{ include.header }}{{ normal }}
{{ itemValue }} {% if ihref %}{% include find_more.html href=ihref %}{% endif %}

{% else %}
{{ include.indent }}- {{ bold }}{{ itemValue }} {% if ihref %}{% include find_more.html href=ihref %}{% endif %}

{% endif %}